import express from 'express';
import topicsOrientationCardsController from '#Controllers/topicsOrientationCards.controller.js';
import topicOrientationPageController from '#Controllers/topicOrientationPage.controller.js';
import sidebarTopicsOrientationController from '#Controllers/sidebarTopicsOrientation.controller.js';
import postCommentTopicOrientationController from '#Controllers/postCommentTopicOrientation.controller.js';
import deleteTopicOrientacionalController from '#Controllers/deleteTopicOrientacional.controller.js';
import updateTopicOrientacionalController from '#Controllers/updateTopicOrientacional.controller.js';
import createTopicOrientacionalController from '#Controllers/createTopicOrientacional.controller.js'; // ✅ Nuevo

const router = express.Router();

// Obtener todos los temas orientacionales
router.get('/topicsOrientationCards', topicsOrientationCardsController);

// Obtener tema por ID
router.get('/topic/:topicId', topicOrientationPageController);

// Temas del sidebar
router.get('/sidebarTopicsOrientation', sidebarTopicsOrientationController);

// Comentar en un tema
router.post('/topic/:topicId/comment', postCommentTopicOrientationController);

// Crear nuevo tema
router.post('/topic', createTopicOrientacionalController);

// Editar tema
router.put('/topic/:topicId', updateTopicOrientacionalController);

// Eliminar tema
router.delete('/topic/:topicId', deleteTopicOrientacionalController);

export default router;
