import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const mainTopicDisciplinarySchema = new Schema(
    {
        _id: { type: String, _id: false },
        title: { type: String, required: true },
        description: { type: String },
        image: { type: String },
    },
    { timestamps: true }
);

const mainTopicDisciplinaryModel = model(
    'mainTopicDisciplinary',
    mainTopicDisciplinarySchema,
    'mainTopicsDisciplinary'
);

export default mainTopicDisciplinaryModel;
