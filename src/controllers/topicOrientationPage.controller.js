import topicsOrientationModel from '#Schemas/topicsOrientation.schema.js';

const topicOrientationPageController = async (req, res) => {
  try {
    let { topicId } = req.params;

    //console.log(`📌 ID recibido en la API: ${topicId}`);

    // Verificar si el ID es un string válido
    if (!topicId || typeof topicId !== "string") {
      return res.status(400).json({ error: "ID del tema no es válido" });
    }

    let topic = await topicsOrientationModel.findOne({ _id: topicId }).select("title text videos comments");

    if (!topic) {
      return res.status(404).json({ error: "Tema no encontrado" });
    }

    res.status(200).json(topic);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el tema" });
  }
};

export default topicOrientationPageController;
