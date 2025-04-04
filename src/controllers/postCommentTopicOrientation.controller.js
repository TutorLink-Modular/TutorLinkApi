import topicsOrientationModel from "#Schemas/topicsOrientation.schema.js";

const postCommentTopicOrientationController = async (req, res) => {
  const { topicId } = req.params;
  const { _id, user, userId, message } = req.body;

  try {
    // Buscar el tema por ID
    const topic = await topicsOrientationModel.findById(topicId);
    if (!topic) return res.status(404).json({ error: "Tema no encontrado" });

    // Agregar comentario al array de comentarios
    topic.comments.push({ _id, user, userId, message });

    // Guardar el documento actualizado
    await topic.save();

    res.status(201).json({ success: true, message: "Comentario guardado correctamente" });
  } catch (error) {
    console.error("❌ Error al guardar comentario:", error);
    res.status(500).json({ error: "Error al guardar el comentario" });
  }
};

export default postCommentTopicOrientationController;