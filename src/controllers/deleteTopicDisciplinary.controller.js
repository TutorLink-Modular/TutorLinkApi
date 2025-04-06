import topicsDisciplinaryModel from '#Schemas/topicsDisciplinary.schema.js';

const deleteTopicDisciplinaryController = async (req, res) => {
    const { topicId } = req.params;

    try {
        const result = await topicsDisciplinaryModel.findByIdAndDelete(topicId);

        if (!result) {
            return res.status(404).json({ error: 'Tema no encontrado.' });
        }

        res.status(200).json({ message: 'Tema eliminado correctamente.' });
    } catch (err) {
        console.error('❌ Error al eliminar tema disciplinar:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

export default deleteTopicDisciplinaryController;
