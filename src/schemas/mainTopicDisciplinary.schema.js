import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const mainTopicDisciplinarySchema = new Schema(
    {
        _id: { type: String, _id: false },
        title: { type: String, required: true },
        description: { type: String }, // Breve descripción del tema principal
        image: { type: String }, // URL de la imagen asociada
    },
    { timestamps: true }
);

// 📌 Asegurar que el modelo usa exactamente la colección `mainTopicsDisciplinary`
const mainTopicDisciplinaryModel = model(
    'mainTopicDisciplinary',
    mainTopicDisciplinarySchema,
    'mainTopicsDisciplinary'
);

export default mainTopicDisciplinaryModel;
