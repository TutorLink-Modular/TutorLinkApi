import mainTopicDisciplinaryModel from '#Schemas/mainTopicDisciplinary.schema.js';

const searchMainTopicsDisciplinaryController = async (req, res) => {
    try {
        const { title } = req.query;

        const regex = new RegExp(title, 'i');
        const results = await mainTopicDisciplinaryModel.find({ title: regex });

        res.status(200).json(results);
    } catch (error) {
        console.error('Error buscando temas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default searchMainTopicsDisciplinaryController;
