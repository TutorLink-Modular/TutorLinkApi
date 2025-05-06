import topicsDisciplinaryModel  from '#Schemas/topicsDisciplinary.schema.js';

const updateCommentTopicDisciplinaryController = async (req, res) => {
  const { topicId, commentId } = req.params;
  const { message } = req.body;

  try {
    const result = await topicsDisciplinaryModel .findOneAndUpdate(
      { _id: topicId, "comments._id": commentId },
      { $set: { "comments.$.message": message } },
      { new: true }
    );

    if (!result) return res.status(404).json({ error: "Comentario no encontrado." });
    res.status(200).json(result.comments);
  } catch (err) {
    console.error("Error al actualizar comentario:", err);
    res.status(500).json({ error: "Error interno." });
  }
};

export default updateCommentTopicDisciplinaryController;