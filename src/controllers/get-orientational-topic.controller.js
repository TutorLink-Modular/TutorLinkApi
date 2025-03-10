import topicsOrientationModel from '#Schemas/topics-orientation.schema.js';

const getOrientationalTopicController = async (req, res) => {
    const { topicId } = req.params;

    try {
        const topic = await topicsOrientationModel.findById(topicId).exec();
        if (!topic) {
            return res
                .status(404)
                .json({ errors: ['Tema orientacional no encontrado.'] });
        }

        return res.json({ id: topic._id, title: topic.title });
    } catch (error) {
        console.error('❌ Error al obtener tema orientacional:', error);
        return res
            .status(500)
            .json({ errors: ['Error interno del servidor.'] });
    }
};

export default getOrientationalTopicController;
