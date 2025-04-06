import mainTopicDisciplinaryModel from '#Schemas/mainTopicDisciplinary.schema.js';

const updateMainTopicDisciplinaryController = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({
            error: 'El título es obligatorio y debe ser un texto válido.',
        });
    }

    try {
        const updatedMainTopic =
            await mainTopicDisciplinaryModel.findByIdAndUpdate(
                id,
                { title: title.trim(), description: description?.trim() || '' },
                { new: true }
            );

        if (!updatedMainTopic) {
            return res.status(404).json({ error: 'Main topic no encontrado.' });
        }

        res.status(200).json(updatedMainTopic);
    } catch (err) {
        console.error('❌ Error al actualizar el main topic:', err);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

export default updateMainTopicDisciplinaryController;
