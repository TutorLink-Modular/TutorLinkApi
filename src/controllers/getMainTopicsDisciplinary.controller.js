import mainTopicDisciplinaryModel from '#Schemas/mainTopicDisciplinary.schema.js';

const getMainTopicsDisciplinaryController = async (req, res) => {
    try {
        const topics = await mainTopicDisciplinaryModel.find(); // Obtiene todos los temas
        return res.status(200).json(topics); // Responde con los datos en formato JSON
    } catch (error) {
        console.error('❌ Error al obtener los temas principales:', error);
        return res
            .status(500)
            .json({
                errors: ['No se pudieron obtener los temas principales.'],
            });
    }
};

export default getMainTopicsDisciplinaryController;
