import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

export interface IAppRequest extends Request {
    payload: any;
    profile: any;
}
export interface IAppResponse extends Response {
    payload: any;
    profile: any;
}

const profileController = {

    getProfileData(req: Request, res: Response) {
        const { id } = req.body;
        console.log('.....', req.body);

        User.findOne({_id: id}, (err, user) => {
            if(err) console.error('ERROR!');

            return res.json(user.profile)
        });
    },

    updateProfileData(req: Request, res: Response) {
        // const { body: { user } } = req;
        const { body: { user: {id} } } = req;
        console.log(req.body);

        // User.updateOne({_id: id}, {profile: user.profile})
        User.update({_id: req.body.user.id}, {$set: {profile: req.body.user.profile}},  (err, user) =>  {
            if (err) {
                return res.send('error updated');
            }
            return res.send("updated");
        })

    },

};

export default profileController;
