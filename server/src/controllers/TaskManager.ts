import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

const TaskManagerController = {
    getTasks(req: Request, res: Response) {},

    setTask(req: Request, res: Response) {
        const { body: { user } } = req;
        console.log('/TaskManager/setTask: ', req.body);

        // const newTask = new User.(user);

        // finalUser.setPassword(user.password);
        // console.log(finalUser);
        //
        // return finalUser.save()
        //     .then(() => res.json({ user: finalUser.toAuthJSON() }));
    },

    updateTask(req: Request, res: Response) {},

    deleteTask(req: Request, res: Response) {}
};

export default TaskManagerController;
