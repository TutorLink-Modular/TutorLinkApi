import UserModel from '#Schemas/user.schema.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto'; // Para generar el token único
import dotenv from 'dotenv';
dotenv.config();

const userForgotPasswordController = async (req, res) => {
    const { email } = req.body;

    try {
        // Verificar si el correo proporcionado está registrado
        const user = await UserModel.findOne({ email }).exec();
        if (!user) {
            return res.status(404).send({
                errors: [
                    'No se encontró un usuario con ese correo electrónico.',
                ],
            });
        }

        // Generar un token único para la recuperación de contraseña
        const resetPasswordToken = crypto.randomBytes(16).toString('hex');

        // Guardar el token hasheado y su fecha de expiración en el usuario
        user.resetPasswordToken = crypto
            .createHash('sha256')
            .update(resetPasswordToken)
            .digest('hex');
        user.resetPasswordExpire = Date.now() + 3600000; // El token expira en 1 hora
        await user.save();

        // Configurar Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Crear enlace para restablecer contraseña
        const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetPasswordToken}`; // Asegúrate de configurar BASE_URL en tu archivo .env

        const mailOptions = {
            from: process.env.EMAIL_USER, // Remitente
            to: email, // Destinatario
            subject: 'Recuperación de contraseña',
            text: `Hola,\n\nRecibimos una solicitud para restablecer tu contraseña. Por favor, haz clic en el siguiente enlace para restablecer tu contraseña:\n\n${resetLink}\n\nSi no realizaste esta solicitud, puedes ignorar este mensaje.\n\nSaludos, El equipo.`,
        };

        // Enviar el correo de recuperación de contraseña
        await transporter.sendMail(mailOptions);
        console.log('Correo de recuperación enviado con éxito');

        return res.status(200).send({
            message:
                'Se ha enviado un enlace de recuperación a tu correo electrónico.',
        });
    } catch (error) {
        console.error('Error al enviar el correo de recuperación:', error);
        return res
            .status(500)
            .send({ errors: ['Hubo un error al procesar la solicitud.'] });
    }
};

export default userForgotPasswordController;
