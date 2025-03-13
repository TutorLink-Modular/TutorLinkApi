import connectDB from '#Config/db.js';
import '#Config/env.js';
import httpServer from '#Config/http.js';

const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL);

    const PORT = process.env.PORT || 4000;

    httpServer.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}; 


bootstrap();
