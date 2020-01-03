import Express from "express";
import authRouter from "./auth";
import profileRouter from "./profile";
import settingsRouter from "./settings";
import notificationsRouter from "./notifications";

import TaskManagerRouter from "./TaskManager";

const Router = Express.Router();


Router.use('/auth', authRouter);
Router.use('/profile', profileRouter);
Router.use('/settings', settingsRouter);
Router.use('/notifications', notificationsRouter);

Router.use('/tasks', TaskManagerRouter);

export default Router;
module.exports = Router;
