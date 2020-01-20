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

    createTask(req: Request, res: Response) {
        const { body: { user } } = req;
        console.log('/TaskManager/createTask: ', req.body);

        User.updateMany({_id: req.body.user.id}, {$push: {tasks: req.body.user.data}},  (err, user) =>  {
            if (err) {
                return res.send('error updated');
            }
            return res.send("updated");
        })
    },

    updateTask(req: Request, res: Response) {
        console.log('/tasks/update: ', req.body);

        User.findOneAndUpdate({_id: req.body.user.id, "tasks._id": req.body.user.data._id}, {$set: {"tasks.$": req.body.user.data}},  (err, user) =>  {
            if (err) {
                return res.send('error updated');
            }
            return res.send("updated");
        })
    },

    deleteTask(req: Request, res: Response) {
        console.log('>>>>>>>>>/tasks/delete: ', req.body);

        User.update({_id: req.body.user.id/*, tasks._id: req.body.user._id*/}, {$pull: {tasks: {_id: req.body.user.data._id}}},  (err, user) =>  {
            if (err) {
                return res.send('error updated');
            }
            return res.send("updated");
        })
    }
};

export default TaskManagerController;
