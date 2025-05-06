import topicsDisciplinaryModel from '#Schemas/topicsDisciplinary.schema.js';

const deleteCommentTopicDisciplinaryController = async (req, res) => {
  const { topicId, commentId } = req.params;

  try {
    const result = await topicsDisciplinaryModel.findByIdAndUpdate(
      topicId,
      { $pull: { comments: { _id: commentId } } },
      { new: true }
    );

    if (!result) return res.status(404).json({ error: "Comentario no encontrado." });
    res.status(200).json(result.comments);
  } catch (err) {
    console.error("Error al eliminar comentario:", err);
    res.status(500).json({ error: "Error interno." });
  }
};

export default deleteCommentTopicDisciplinaryController;