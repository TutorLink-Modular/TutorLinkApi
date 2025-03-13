import UserModel from '#Schemas/user.schema.js';

const removeOrientationalTopicController = async (req, res) => {
    const { id } = req; // ID del usuario autenticado
    const { topicId } = req.body;

    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ errors: ['Usuario no encontrado.'] });
        }

        // Verificar si el tema está guardado
        if (!user.savedOrientationalTopics.includes(topicId)) {
            return res
                .status(400)
                .json({ errors: ['El tema no está guardado.'] });
        }

        // Eliminar el tema del array
        user.savedOrientationalTopics = user.savedOrientationalTopics.filter(
            (id) => id !== topicId
        );
        await user.save();

        return res
            .status(200)
            .json({ message: 'Tema eliminado exitosamente.' });
    } catch (error) {
        console.error('❌ Error al eliminar el tema orientacional:', error);
        return res
            .status(500)
            .json({ errors: ['Error interno del servidor.'] });
    }
};

export default removeOrientationalTopicController;
