import topicsOrientationModel from '#Schemas/topicsOrientation.schema.js';

const updateTopicOrientacionalController = async (req, res) => {
    const { topicId } = req.params;
    const { title, description, text, image, videos } = req.body; // ✅ Incluye videos

    try {
        const updated = await topicsOrientationModel.findByIdAndUpdate(
            topicId,
            {
                title,
                description,
                text,
                image,
                videos, //Actualiza también el campo videos
            },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: 'Tema no encontrado.' });
        }

        res.status(200).json(updated);
    } catch (err) {
        console.error('❌ Error al actualizar tema orientacional:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

export default updateTopicOrientacionalController;
