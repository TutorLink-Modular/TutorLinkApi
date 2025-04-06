import topicsOrientationModel from '#Schemas/topicsOrientation.schema.js';

const deleteTopicOrientacionalController = async (req, res) => {
    const { topicId } = req.params;

    try {
        const result = await topicsOrientationModel.findByIdAndDelete(topicId);

        if (!result) {
            return res.status(404).json({ error: 'Tema no encontrado.' });
        }

        res.status(200).json({ message: 'Tema eliminado correctamente.' });
    } catch (err) {
        console.error('❌ Error al eliminar tema orientacional:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

export default deleteTopicOrientacionalController;
