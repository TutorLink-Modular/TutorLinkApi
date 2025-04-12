import topicsDisciplinaryModel from '#Schemas/topicsDisciplinary.schema.js';

const topicDisciplinaryPageController = async (req, res) => {
    try {
        let { topicId } = req.params;

        if (!topicId || typeof topicId !== 'string') {
            console.log('ID no válido:', topicId);
            return res.status(400).json({ error: 'ID del tema no es válido' });
        }

        console.log('Buscando tema con String ID...');
        let topic = await topicsDisciplinaryModel
            .findOne({ _id: topicId })
            .select('title description image text videos comments');

        if (!topic) {
            console.log('Tema no encontrado en la base de datos');
            return res.status(404).json({ error: 'Tema no encontrado' });
        }

        console.log('Tema encontrado:', topic);
        res.status(200).json(topic);
    } catch (error) {
        console.error('Error al obtener el tema:', error);
        res.status(500).json({ error: 'Error al obtener el tema' });
    }
};

export default topicDisciplinaryPageController;
