import topicsOrientationModel from '#Schemas/topicsOrientation.schema.js';

const deleteCommentTopicOrientationController = async (req, res) => {
  const { topicId, commentId } = req.params;

  try {
    const result = await topicsOrientationModel.findByIdAndUpdate(
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

export default deleteCommentTopicOrientationController;