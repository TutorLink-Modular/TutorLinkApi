import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const topicsDisciplinarySchema = new Schema(
    {
        _id: {
          type: String,
          required: true,
        },
        title: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        text: { type: String, required: true },
        idMainTopic: { type: String, required: true },
        videos: [{ type: String }],
        comments: [
            {
              _id: String, 
              user: String,
              userId: String,
              message: String,
              createdAt: { type: Date, default: Date.now },
            },
          ],
    },
    { timestamps: true }
);

const topicsDisciplinaryModel = model(
    'topicsDisciplinary',
    topicsDisciplinarySchema,
    'topicsDisciplinary'
);

export default topicsDisciplinaryModel;
