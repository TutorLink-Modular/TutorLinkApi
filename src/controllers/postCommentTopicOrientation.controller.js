import topicsOrientationModel from "../schemas/topicsOrientation.schema.js";

const postCommentTopicOrientationController = async (req, res) => {
    const { topicId } = req.params;
    const { _id, user, userId, message } = req.body;
      
    try {
      const topic = await topicsOrientationModel.findById(topicId);
      if (!topic) return res.status(404).json({ error: "Tema no encontrado" });
      topic.comments.push({
        _id,
        user,
        userId,
        message,
      });
      await topic.save();      
      res.status(201).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al guardar el comentario" });
    }
};

export default postCommentTopicOrientationController;