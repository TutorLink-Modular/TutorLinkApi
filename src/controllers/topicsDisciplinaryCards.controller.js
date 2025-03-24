import topicsDisciplinaryModel from '#Schemas/topicsDisciplinary.schema.js';

const getTopicsByMainTopicController = async (req, res) => {
    try {
        const { idMainTopic } = req.params; // ✅ Extraer el idMainTopic de los parámetros de la URL

        if (!idMainTopic) {
            return res
                .status(400)
                .json({ errors: ['El idMainTopic es requerido'] });
        }

        // 🔥 Buscar todos los temas que coincidan con el idMainTopic
        const topics = await topicsDisciplinaryModel
            .find({ idMainTopic })
            .exec();

        if (!topics.length) {
            return res
                .status(404)
                .json({
                    errors: ['No se encontraron temas para este idMainTopic'],
                });
        }

        return res.status(200).json(topics);
    } catch (error) {
        console.error('❌ Error al obtener los temas por idMainTopic:', error);
        return res.status(500).json({ errors: ['Error interno del servidor'] });
    }
};

export default getTopicsByMainTopicController;
