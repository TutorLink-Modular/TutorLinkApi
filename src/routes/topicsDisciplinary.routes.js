import express from 'express';
import topicDisciplinaryPageController from '#Controllers/topicDisciplinaryPage.controller.js';
import sidebarTopicsDisciplinaryController from '#Controllers/sidebarTopicsDisciplinary.controller.js';
import getMainTopicsDisciplinaryController from '#Controllers/getMainTopicsDisciplinary.controller.js';
import getTopicsByMainTopicController from '#Controllers/topicsDisciplinaryCards.controller.js';
import getMainTopicByIdController from '#Controllers/getMainTopicById.controller.js';
import searchMainTopicsDisciplinaryController from '#Controllers/searchMainTopicsDisciplinary.controller.js';
import postCommentTopicDisciplinaryController from '#Controllers/postCommentTopicDisciplinary.controller.js';
import deleteTopicDisciplinaryController from '#Controllers/deleteTopicDisciplinary.controller.js';
import updateTopicDisciplinaryController from '#Controllers/updateTopicDisciplinary.controller.js';
import createTopicDisciplinaryController from '#Controllers/createTopicDisciplinary.controller.js'; // ✅ Nuevo

const router = express.Router();

// Buscar temas por título
router.get(
    '/main-topics-disciplinary/search',
    searchMainTopicsDisciplinaryController
);

// Obtener info por ID del main topic
router.get(
    '/main-topics-disciplinary/:idMainTopic',
    getMainTopicByIdController
);

// Obtener todos los main topics
router.get('/main-topics-disciplinary', getMainTopicsDisciplinaryController);

// Obtener todos los temas de un main topic
router.get('/main-topic/:idMainTopic', getTopicsByMainTopicController);

// Obtener tema individual por ID
router.get('/topic/:topicId', topicDisciplinaryPageController);

// Temas del sidebar
router.get('/sidebarTopicsDisciplinary', sidebarTopicsDisciplinaryController);

// Comentar en un tema
router.post('/topic/:topicId/comment', postCommentTopicDisciplinaryController);

// Crear nuevo tema
router.post('/topic', createTopicDisciplinaryController);

// Editar tema
router.put('/topic/:topicId', updateTopicDisciplinaryController);

// Eliminar tema
router.delete('/topic/:topicId', deleteTopicDisciplinaryController);

export default router;
