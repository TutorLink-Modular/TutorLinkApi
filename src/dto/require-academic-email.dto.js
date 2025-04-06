const requireAcademicEmail = (req, res, next) => {
    if (!req.email || !req.email.includes('@academicos')) {
        return res
            .status(403)
            .send({
                errors: ['Acceso denegado: solo para usuarios académicos'],
            });
    }
    next();
};

export default requireAcademicEmail;
