import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

const notificationsController = {

    get(req: Request, res: Response) {
        console.log('/notifications/get: ', req.body);

        User.findOne({_id: req.body.id}, (err, user) => {
            if(err) console.error('ERROR!');

            return res.json(user.notifications)
        });
    },

    set(req: Request, res: Response) {
        console.log('/notifications/set: ', req.body);

        User.updateMany({_id: req.body.user.id}, {$set: {notifications: req.body.user.notifications}},  (err, user) =>  {
            if (err) {
                return res.send('error updated');
            }
            return res.send("updated");
        })

    },

    find(req: Request, res: Response) {},

    del(req: Request, res: Response) {},

};

export default notificationsController;
