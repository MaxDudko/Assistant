import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

export interface IAppRequest extends Request {
    payload?: any;
}

const settingsController = {

    get(req: Request, res: Response) {
        const { id } = req.body;
        console.log('/notifications/get: ', req.body);

        User.findOne({_id: id}, (err, user) => {
            if(err) console.error('ERROR!');

            return res.json(user.notifications)
        });
    },

    set(req: Request, res: Response) {
        // const { body: { user } } = req;
        // const { body: { user: {id} } } = req;
        console.log('/notifications/set: ', req.body);

        // User.updateOne({_id: id}, {profile: user.profile})
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

export default settingsController;
