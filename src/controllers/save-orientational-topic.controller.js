import UserModel from '#Schemas/user.schema.js';

const saveOrientationalTopicController = async (req, res) => {
    const { id } = req; // ID del usuario autenticado
    const { topicId } = req.body;

    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ errors: ['Usuario no encontrado.'] });
        }

        // Verificar si el tema ya está guardado
        if (user.savedOrientationalTopics.includes(topicId)) {
            return res
                .status(400)
                .json({ errors: ['El tema ya está guardado.'] });
        }

        // Guardar el tema en el array
        user.savedOrientationalTopics.push(topicId);
        await user.save();

        return res.status(200).json({ message: 'Tema guardado exitosamente.' });
    } catch (error) {
        console.error('❌ Error al guardar el tema orientacional:', error);
        return res
            .status(500)
            .json({ errors: ['Error interno del servidor.'] });
    }
};

export default saveOrientationalTopicController;
