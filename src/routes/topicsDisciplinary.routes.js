import express from 'express';
import topicDisciplinaryPageController from '#Controllers/topicDisciplinaryPage.controller.js';
import sidebarTopicsDisciplinaryController from '#Controllers/sidebarTopicsDisciplinary.controller.js';
import getMainTopicsDisciplinaryController from '#Controllers/getMainTopicsDisciplinary.controller.js';
import getTopicsByMainTopicController from '#Controllers/topicsDisciplinaryCards.controller.js';
import getMainTopicByIdController from '#Controllers/getMainTopicById.controller.js';

const router = express.Router();

// 📌 Creamos dos rutas:
router.get('/main-topic/:idMainTopic', getTopicsByMainTopicController);
router.get('/topic/:topicId', topicDisciplinaryPageController); //Para la segunda consulta, el cual ocupa el ID para devolver solo el tema seleccionado
router.get('/sidebarTopicsDisciplinary', sidebarTopicsDisciplinaryController); //Para mostrar todos los temas en el sidebar
router.get('/main-topics-disciplinary', getMainTopicsDisciplinaryController);
router.get(
    '/main-topics-disciplinary/:idMainTopic',
    getMainTopicByIdController
);

export default router;
