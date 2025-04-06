import mainTopicDisciplinaryModel from '#Schemas/mainTopicDisciplinary.schema.js';
import topicsDisciplinaryModel from '#Schemas/topicsDisciplinary.schema.js';

const deleteMainTopicDisciplinaryController = async (req, res) => {
    const { idMainTopic } = req.params;

    try {
        // Eliminar todos los subtemas que tienen este idMainTopic
        await topicsDisciplinaryModel.deleteMany({ idMainTopic });

        // Eliminar el main topic
        const deletedMainTopic =
            await mainTopicDisciplinaryModel.findByIdAndDelete(idMainTopic);

        if (!deletedMainTopic) {
            return res
                .status(404)
                .json({ error: 'Tema principal no encontrado' });
        }

        res.status(200).json({
            message: 'Tema principal y sus subtemas eliminados correctamente',
        });
    } catch (error) {
        console.error('❌ Error al eliminar el tema principal:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default deleteMainTopicDisciplinaryController;
