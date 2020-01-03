import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

const TaskManagerController = {
    getTasks(req: Request, res: Response) {
        console.log(req.body);
        if(req.body.id) User.findOne({_id: req.body.id}, (err, user) => {
            if(err) console.error('ERROR!');


            return res.json(user.tasks)


        });
    },

    setTask(req: Request, res: Response) {
        const { body: { user } } = req;
        console.log('/TaskManager/setTask: ', req.body);

        User.updateMany({_id: req.body.id}, {$push: {tasks: req.body.task}},  (err, user) =>  {
            if (err) {
                return res.send('error updated');
            }
            return res.send("updated");
        })
    },

    updateTask(req: Request, res: Response) {},

    deleteTask(req: Request, res: Response) {}
};

export default TaskManagerController;
