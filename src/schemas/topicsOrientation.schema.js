import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const topicsOrientationSchema = new Schema(
    {
        _id: { type: String, _id: false },
        title: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        text: { type: String, required: true },
    },
    { timestamps: true }
);

//Asegurar que el modelo usa exactamente la colección `topicsOrientation`
const topicsOrientationModel = model(
    'topicsOrientation',
    topicsOrientationSchema,
    'topicsOrientation'
);

export default topicsOrientationModel;
