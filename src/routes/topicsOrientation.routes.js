import express from 'express';
import topicsOrientationCardsController from '#Controllers/topicsOrientationCards.controller.js';
import topicOrientationPageController from '#Controllers/topicOrientationPage.controller.js';
import sidebarTopicsOrientationController from '#Controllers/sidebarTopicsOrientation.controller.js';

const router = express.Router();

// 📌 Creamos dos rutas:
router.get('/topicsOrientationCards', topicsOrientationCardsController); //Para mostrar todos los temas al usuario
router.get('/topic/:topicId', topicOrientationPageController); //Para la segunda consulta, el cual ocupa el ID para devolver solo el tema seleccionado
router.get('/sidebarTopicsOrientation', sidebarTopicsOrientationController); //Para mostrar todos los temas en el sidebar

export default router;
