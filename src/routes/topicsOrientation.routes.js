import express from 'express';
import topicsOrientationCardsController from '#Controllers/topicsOrientationCards.controller.js';
import topicOrientationPageController from '#Controllers/topicOrientationPage.controller.js';
import sidebarTopicsOrientationController from '#Controllers/sidebarTopicsOrientation.controller.js';
import postCommentTopicOrientationController from '#Controllers/postCommentTopicOrientation.controller.js';

const router = express.Router();

//creamos dos rutas:
router.get('/topicsOrientationCards', topicsOrientationCardsController); //Para mostrar todos los temas al usuario
router.get('/topic/:topicId', topicOrientationPageController); //Para la segunda consulta, el cual ocupa el ID para devolver solo el tema seleccionado
router.get('/sidebarTopicsOrientation', sidebarTopicsOrientationController); //Para mostrar todos los temas en el sidebar

router.post("/topic/:topicId/comment", postCommentTopicOrientationController); //Para crear comentarios y guardarlos en la base de datos

export default router;
