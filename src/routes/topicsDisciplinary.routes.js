import express from 'express';
import topicsDisciplinaryCardsController from '#Controllers/topicsDisciplinaryCards.controller.js';
import topicDisciplinaryPageController from '#Controllers/topicDisciplinaryPage.controller.js';
import sidebarTopicsDisciplinaryController from '#Controllers/sidebarTopicsDisciplinary.controller.js';
import getMainTopicsDisciplinaryController from '#Controllers/getMainTopicsDisciplinary.controller.js';

const router = express.Router();

// 📌 Creamos dos rutas:
router.get('/topicsDisciplinaryCards', topicsDisciplinaryCardsController); //Para mostrar todos los temas al usuario
router.get('/topic/:topicId', topicDisciplinaryPageController); //Para la segunda consulta, el cual ocupa el ID para devolver solo el tema seleccionado
router.get('/sidebarTopicsDisciplinary', sidebarTopicsDisciplinaryController); //Para mostrar todos los temas en el sidebar
router.get('/main-topics-disciplinary', getMainTopicsDisciplinaryController);

export default router;
