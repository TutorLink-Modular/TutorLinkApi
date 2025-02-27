import topicsOrientationModel from '#Schemas/topicsOrientation.schema.js';

const topicsOrientationCardsController = async (req, res) => {
  try {
    // Agregar logs para depuración
    console.log("📌 Conectando a MongoDB y buscando datos...");

    const topics = await topicsOrientationModel.find().select("title description image");

    console.log("📌 Datos obtenidos de MongoDB:", topics); // ✅ Ver qué datos devuelve la consulta

    res.status(200).json(topics);
  } catch (error) {
    console.error('❌ Error fetching topics:', error);
    res.status(500).send({ errors: ['Error al obtener los temas de orientación'] });
  }
};

export default topicsOrientationCardsController;
