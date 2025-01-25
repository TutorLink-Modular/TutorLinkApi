import { SALT } from '#Constants/salt.js';
import UserModel from '#Schemas/user.schema.js';
import crypto from 'crypto'; // Para generar el token único
import { hash } from 'bcrypt';

const userResetPasswordController = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        // Buscar el usuario por el token de recuperación
        const hashedToken = crypto
            .createHash('sha256')
            .update(token)
            .digest('hex');
        const user = await UserModel.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now() }, // Verificar que el token no haya expirado
        }).exec();

        if (!user) {
            return res.status(400).send({
                errors: ['El token es inválido o ha expirado.'],
            });
        }

        // Hashear la nueva contraseña
        const hashedPassword = await hash(newPassword, SALT);
        user.password = hashedPassword;

        // Eliminar los campos de recuperación después de actualizar la contraseña
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        return res.send('Contraseña actualizada correctamente.');
    } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        return res.status(500).send({
            errors: ['Hubo un error al restablecer la contraseña.'],
        });
    }
};

export default userResetPasswordController;
