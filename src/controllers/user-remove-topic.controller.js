import UserModel from '#Schemas/user.schema.js';

const userRemoveTopicController = async (req, res) => {
    try {
        const { id } = req; // ID del usuario autenticado (del token JWT)
        const { topicId } = req.body; // ID del tema a eliminar

        if (!topicId) {
            return res
                .status(400)
                .send({ errors: ['El ID del tema es requerido'] });
        }

        // Buscar al usuario en la base de datos
        const user = await UserModel.findById(id).exec();

        if (!user) {
            return res.status(404).send({ errors: ['Usuario no encontrado'] });
        }

        // Verificar si el tema está guardado antes de eliminarlo
        if (!user.savedTopics.includes(topicId)) {
            return res
                .status(400)
                .send({ errors: ['Este tema no está guardado'] });
        }

        // Eliminar el ID del tema de la lista de temas guardados
        user.savedTopics = user.savedTopics.filter((id) => id !== topicId);
        await user.save();

        return res
            .status(200)
            .send({ message: 'Tema eliminado correctamente' });
    } catch (error) {
        console.error('❌ Error al eliminar el tema:', error);
        return res.status(500).send({ errors: ['Error al eliminar el tema'] });
    }
};

export default userRemoveTopicController;
