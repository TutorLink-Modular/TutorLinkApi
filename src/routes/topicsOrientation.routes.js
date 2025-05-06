import express from 'express';
import topicsOrientationCardsController from '#Controllers/topicsOrientationCards.controller.js';
import topicOrientationPageController from '#Controllers/topicOrientationPage.controller.js';
import sidebarTopicsOrientationController from '#Controllers/sidebarTopicsOrientation.controller.js';
import postCommentTopicOrientationController from '#Controllers/postCommentTopicOrientation.controller.js';
import deleteTopicOrientacionalController from '#Controllers/deleteTopicOrientacional.controller.js';
import updateTopicOrientacionalController from '#Controllers/updateTopicOrientacional.controller.js';
import createTopicOrientacionalController from '#Controllers/createTopicOrientacional.controller.js'; 
import updateCommentTopicOrientationController from '#Controllers/updateCommentTopicOrientation.controller.js'; 
import deleteCommentTopicOrientationController from '#Controllers/deleteCommentTopicOrientation.controller.js'; 

const router = express.Router();

// Obtener todos los temas orientacionales
router.get('/topicsOrientationCards', topicsOrientationCardsController);

// Obtener tema por ID
router.get('/topic/:topicId', topicOrientationPageController);

// Temas del sidebar
router.get('/sidebarTopicsOrientation', sidebarTopicsOrientationController);

// Crear nuevo tema
router.post('/topic', createTopicOrientacionalController);

// Editar tema
router.put('/topic/:topicId', updateTopicOrientacionalController);

// Eliminar tema
router.delete('/topic/:topicId', deleteTopicOrientacionalController);

// Comentar en un tema
router.post('/topic/:topicId/comment', postCommentTopicOrientationController);

// Actualizar comentario
router.put('/topic/:topicId/comment/:commentId', updateCommentTopicOrientationController);

// Eliminar comentario
router.delete('/topic/:topicId/comment/:commentId', deleteCommentTopicOrientationController);

export default router;
