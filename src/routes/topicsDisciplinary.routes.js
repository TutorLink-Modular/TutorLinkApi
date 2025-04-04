import express from 'express';
import topicDisciplinaryPageController from '#Controllers/topicDisciplinaryPage.controller.js';
import sidebarTopicsDisciplinaryController from '#Controllers/sidebarTopicsDisciplinary.controller.js';
import getMainTopicsDisciplinaryController from '#Controllers/getMainTopicsDisciplinary.controller.js';
import getTopicsByMainTopicController from '#Controllers/topicsDisciplinaryCards.controller.js';
import getMainTopicByIdController from '#Controllers/getMainTopicById.controller.js';
import searchMainTopicsDisciplinaryController from '#Controllers/searchMainTopicsDisciplinary.controller.js';
import postCommentTopicDisciplinaryController from '#Controllers/postCommentTopicDisciplinary.controller.js';

const router = express.Router();

router.get(
    '/main-topics-disciplinary/search',
    searchMainTopicsDisciplinaryController
);
router.get(
    '/main-topics-disciplinary/:idMainTopic',
    getMainTopicByIdController
);
router.get('/main-topics-disciplinary', getMainTopicsDisciplinaryController);
router.get('/main-topic/:idMainTopic', getTopicsByMainTopicController);
router.get('/topic/:topicId', topicDisciplinaryPageController);
router.get('/sidebarTopicsDisciplinary', sidebarTopicsDisciplinaryController);

router.post("/topic/:topicId/comment", postCommentTopicDisciplinaryController); //Para crear comentarios y guardarlos en la base de datos
export default router;
