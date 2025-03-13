import { Router } from 'express';
import getDisciplinaryTopicController from '#Controllers/get-disciplinary-topic.controller.js';
import getOrientationalTopicController from '#Controllers/get-orientational-topic.controller.js';

const topicsRouter = Router();

// 🔥 Obtener tema DISCIPLINAR por ID
topicsRouter.get(
    '/topics-disciplinary/:topicId',
    getDisciplinaryTopicController
);

// 🔥 Obtener tema ORIENTACIONAL por ID
topicsRouter.get(
    '/topics-orientation/:topicId',
    getOrientationalTopicController
);

export default topicsRouter;
