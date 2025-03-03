import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        _id: { type: String, _id: false },
        name: { type: String, required: true, minLength: 2, maxLength: 20 },
        surname: { type: String, required: true, minLength: 4, maxLength: 50 },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isEmailVerified: { type: Boolean, default: false }, // Indica si el correo ha sido verificado
        emailVerificationCode: { type: String }, // Código único para la verificación del correo
        resetPasswordToken: { type: String }, // Token hasheado para la recuperación de contraseña
        resetPasswordExpire: { type: Date }, // Fecha de expiración del token de recuperación
    },
    { timestamps: true } // timestamps añade campos createdAt y updatedAt automáticamente
);

const UserModel = model('User', userSchema);

export default UserModel;
