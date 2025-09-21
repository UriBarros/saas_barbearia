import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController'
import { UserDetailController } from './controllers/user/DeatailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { CreateHaircutController } from './controllers/haircut/CreateHaircutController'
import { ListHaircutController } from './controllers/haircut/ListHaircutController'
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController'
import { CountHaircutController } from './controllers/haircut/CountHaircutController'
import { DetailHaircutController } from './controllers/haircut/DetailHaircutController'

import { NewScheduleController } from './controllers/schedule/NewScheduleController'
import { ListScheduleController } from './controllers/schedule/ListScheduleController'
import { FinishScheduleController } from './controllers/schedule/FinishSheculeController'


import { CheckSubscriptionController } from './controllers/haircut/CheckSubscriptionController'

import { isAuthenticated } from './middlewares/isAuthenticated';




const router = Router();

//----ROUTE USER----
router.post('/user', new CreateUserController().handle);
router.post('/auth', new AuthUserController().handle);
router.get('/me', isAuthenticated, new UserDetailController().handle);
router.put('/users', isAuthenticated, new UpdateUserController().handle);

//----ROUTE HAIRCUT----
router.post('/haircut', isAuthenticated, new CreateHaircutController().handle);
router.get('/haircuts', isAuthenticated, new ListHaircutController().handle);
router.put('/haircut', isAuthenticated, new UpdateHaircutController().handle);
router.get('/haircut/count', isAuthenticated, new CountHaircutController().handle);
router.get('/haircut/detail', isAuthenticated, new DetailHaircutController().handle);

//----CHECK SUBS----
router.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().handle);

//----SCHEDULE / SERVICE----
router.post('/schedule', isAuthenticated, new NewScheduleController().handle);
router.get('/schedule', isAuthenticated, new ListScheduleController().handle);
router.delete('/schedule', isAuthenticated, new FinishScheduleController().handle);





export { router };