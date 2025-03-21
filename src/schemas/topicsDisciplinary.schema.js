import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const topicsDisciplinarySchema = new Schema(
    {
        _id: { type: String, _id: false },
        title: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        text: { type: String, required: true },
        idMainTopic: { type: String, required: true },
    },
    { timestamps: true }
);

const topicsDisciplinaryModel = model(
    'topicsDisciplinary',
    topicsDisciplinarySchema,
    'topicsDisciplinary'
);

export default topicsDisciplinaryModel;
