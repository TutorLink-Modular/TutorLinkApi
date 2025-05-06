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
import createTopicDisciplinaryController from '#Controllers/createTopicDisciplinary.controller.js';
import createMainTopicDisciplinaryController from '#Controllers/createMainTopicDisciplinary.controller.js';
import deleteMainTopicDisciplinaryController from '#Controllers/deleteMainTopicDisciplinary.controller.js';
import updateMainTopicDisciplinaryController from '#Controllers/updateMainTopicDisciplinary.controller.js';
import updateCommentTopicDisciplinaryController from '#Controllers/updateCommentTopicDisciplinary.controller.js';
import deleteCommentTopicDisciplinaryController from '#Controllers/deleteCommentTopicDisciplinary.controller.js';

const router = express.Router();

/* 🔹 Main Topics Disciplinarios */
// Obtener todos los main topics
router.get('/main-topics-disciplinary', getMainTopicsDisciplinaryController);

// Buscar main topics por título
router.get(
    '/main-topics-disciplinary/search',
    searchMainTopicsDisciplinaryController
);

// Obtener un main topic por ID
router.get(
    '/main-topics-disciplinary/:idMainTopic',
    getMainTopicByIdController
);

// Crear nuevo main topic
router.post('/main-topics-disciplinary', createMainTopicDisciplinaryController);

// Actualizar un main topic disciplinar
router.put(
    '/main-topics-disciplinary/:id',
    updateMainTopicDisciplinaryController
);

// Eliminar un main topic y sus subtemas
router.delete(
    '/main-topics-disciplinary/:idMainTopic',
    deleteMainTopicDisciplinaryController
);

/* 🔹 Temas Disciplinarios */
// Obtener todos los temas asociados a un main topic
router.get('/main-topic/:idMainTopic', getTopicsByMainTopicController);

// Obtener un tema por ID
router.get('/topic/:topicId', topicDisciplinaryPageController);

// Crear nuevo tema
router.post('/topic', createTopicDisciplinaryController);

// Editar tema
router.put('/topic/:topicId', updateTopicDisciplinaryController);

// Eliminar tema
router.delete('/topic/:topicId', deleteTopicDisciplinaryController);

// Comentarios en tema
router.post('/topic/:topicId/comment', postCommentTopicDisciplinaryController);

// Sidebar con temas
router.get('/sidebarTopicsDisciplinary', sidebarTopicsDisciplinaryController);

// Actualizar comentario
router.put('/topic/:topicId/comment/:commentId', updateCommentTopicDisciplinaryController);

// Eliminar comentario
router.delete('/topic/:topicId/comment/:commentId', deleteCommentTopicDisciplinaryController);

export default router;
