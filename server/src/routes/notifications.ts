import Express, {Request} from "express";
import notificationsController from "../controllers/notifications";

const {get, set, find, del} = notificationsController;

const notificationsRouter = Express.Router();

notificationsRouter.post('/get', get);
notificationsRouter.post('/set', set);
notificationsRouter.post('/find', find);
notificationsRouter.delete('/del', del);

export default notificationsRouter;
