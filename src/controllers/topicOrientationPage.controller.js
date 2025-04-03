import topicsOrientationModel from '#Schemas/topicsOrientation.schema.js';

const topicOrientationPageController = async (req, res) => {
    try {
        let { topicId } = req.params;

        // Verificar si el ID es un string válido
        if (!topicId || typeof topicId !== 'string') {
            console.log('ID no válido:', topicId);
            return res.status(400).json({ error: 'ID del tema no es válido' });
        }

        console.log('Buscando tema con String ID...');
        let topic = await topicsOrientationModel
            .findOne({ _id: topicId })
            .select('title text');

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

export default topicOrientationPageController;
