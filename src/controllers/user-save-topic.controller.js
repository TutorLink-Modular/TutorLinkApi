import UserModel from '#Schemas/user.schema.js';

const userSaveTopicController = async (req, res) => {
    try {
        const { id } = req; // ID del usuario autenticado (extraído del token JWT)
        const { topicId } = req.body; // ID del tema enviado desde el frontend

        if (!topicId) {
            return res
                .status(400)
                .send({ errors: ['El ID del tema es requerido'] });
        }

        //Buscar al usuario en la base de datos
        const user = await UserModel.findById(id).exec();

        if (!user) {
            return res.status(404).send({ errors: ['Usuario no encontrado'] });
        }

        //Verificar si el tema ya fue guardado previamente
        if (user.savedTopics.includes(topicId)) {
            return res
                .status(400)
                .send({ errors: ['Este tema ya ha sido guardado'] });
        }

        //Guardar el ID del tema en el array
        user.savedTopics.push(topicId);
        await user.save();

        return res.status(200).send({ message: 'Tema guardado correctamente' });
    } catch (error) {
        console.error('Error al guardar el tema:', error);
        return res.status(500).send({ errors: ['Error al guardar el tema'] });
    }
};

export default userSaveTopicController;
