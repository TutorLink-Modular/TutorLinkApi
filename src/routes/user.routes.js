import { Router } from 'express';

// Controladores
import userListController from '#Controllers/user-list.controller.js';
import userLoginController from '#Controllers/user-login.controller.js';
import userProfileController from '#Controllers/user-profile.controller.js';
import userRegisterController from '#Controllers/user-register.controller.js';
import userUnregisterController from '#Controllers/user-unregister.controller.js';
import userUpdateDataController from '#Controllers/user-update-data.controller.js';
import userUpdateEmailController from '#Controllers/user-update-email.controller.js';
import userUpdatePasswordController from '#Controllers/user-update-password.controller.js';
import verifyEmailController from '#Controllers/verify-email.controller.js';
import {
    resendVerificationEmailController,
    resendLimit,
} from '#Controllers/resend-verification-email.controller.js';
import userForgotPasswordController from '#Controllers/user-forgot-password.controller.js';
import userResetPasswordController from '#Controllers/user-reset-password.controller.js';
import userSaveTopicController from '#Controllers/user-save-topic.controller.js';
import userRemoveTopicController from '#Controllers/user-remove-topic.controller.js';
import saveOrientationalTopicController from '#Controllers/save-orientational-topic.controller.js';
import removeOrientationalTopicController from '#Controllers/remove-orientational-topic.controller.js';

// Middlewares (DTOs)
import userJWTDTO from '#Dto/user-jwt.dto.js';
import userLoginDTO from '#Dto/user-login.dto.js';
import userRegisterDTO from '#Dto/user-register.dto.js';
import userUnregisterDTO from '#Dto/user-unregister.dto.js';
import userUpdateDataDTO from '#Dto/user-update-data.dto.js';
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import userResetPasswordDTO from '#Dto/user-reset-password.dto.js';
import requireAcademicEmail from '#Dto/require-academic-email.dto.js';

const userRouter = Router();

// Rutas públicas
userRouter.get('/users', userListController);
userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/verify-email', verifyEmailController);
userRouter.post(
    '/resend-verification-email',
    resendLimit,
    resendVerificationEmailController
);
userRouter.post('/forgot-password', userForgotPasswordController);
userRouter.post(
    '/reset-password',
    userResetPasswordDTO,
    userResetPasswordController
);

// Rutas protegidas
userRouter.get('/profile', userJWTDTO, userProfileController);

userRouter.patch(
    '/update-data',
    userJWTDTO,
    userUpdateDataDTO,
    userUpdateDataController
);
userRouter.patch(
    '/update-email',
    userJWTDTO,
    userUpdateEmailDTO,
    userUpdateEmailController
);
userRouter.patch(
    '/update-password',
    userJWTDTO,
    userUpdatePasswordDTO,
    userUpdatePasswordController
);
userRouter.delete(
    '/unregister',
    userJWTDTO,
    userUnregisterDTO,
    userUnregisterController
);

// Guardar/eliminar temas favoritos
userRouter.post('/save-topic', userJWTDTO, userSaveTopicController);
userRouter.post('/remove-topic', userJWTDTO, userRemoveTopicController);

// Temas orientacionales favoritos
userRouter.post(
    '/save-orientational-topic',
    userJWTDTO,
    saveOrientationalTopicController
);
userRouter.post(
    '/remove-orientational-topic',
    userJWTDTO,
    removeOrientationalTopicController
);

//Ruta protegida solo para usuarios con correo @academicos
userRouter.get(
    '/academico-only',
    userJWTDTO,
    requireAcademicEmail,
    (req, res) => {
        res.status(200).send({
            message: 'Acceso concedido solo para usuarios académicos',
        });
    }
);

export default userRouter;
