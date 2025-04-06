import topicsDisciplinaryModel from '#Schemas/topicsDisciplinary.schema.js';

const updateTopicDisciplinaryController = async (req, res) => {
    const { topicId } = req.params;
    const { title, description, text, idMainTopic, image, videos } = req.body; //Incluye videos

    try {
        const updated = await topicsDisciplinaryModel.findByIdAndUpdate(
            topicId,
            {
                title,
                description,
                text,
                idMainTopic,
                image,
                videos, //Agrega también el campo videos
            },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: 'Tema no encontrado.' });
        }

        res.status(200).json(updated);
    } catch (err) {
        console.error('❌ Error al actualizar tema disciplinar:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

export default updateTopicDisciplinaryController;
