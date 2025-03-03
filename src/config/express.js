import userRouter from '#Routes/user.routes.js';
import topicsOrientationRouter from '#Routes/topicsOrientation.routes.js'; 
import topicsDisciplinaryRouter from '#Routes/topicsDisciplinary.routes.js'; 
import express from 'express';
import cors from 'cors'; 

const expressApp = express();

// Middleware para CORS
expressApp.use(cors()); // Usa cors para permitir solicitudes desde cualquier origen

// Otros Middlewares
expressApp.use(express.json());

// Rutas
expressApp.use('/user', userRouter);
expressApp.use('/topics-orientation', topicsOrientationRouter);
expressApp.use('/topics-disciplinary', topicsDisciplinaryRouter);

export default expressApp;

