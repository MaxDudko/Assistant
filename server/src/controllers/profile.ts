import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

export interface IAppRequest extends Request {
    payload: any;
    profile: any;
}

const profileController = {

    get(req: IAppRequest, res: Response) {
        const { id } = req.body;
        console.log('.....', req.body);

        User.findOne({_id: id}, (err, user) => {
            if(err) console.error('ERROR!');

            return res.json(user.profile)
        });
    },

    set(req: Request, res: Response) {
        const { body: { user } } = req;
        const { body: { user: {id} } } = req;
        console.log(user);

        // User.updateOne({_id: id}, {profile: user.profile})
        User.findOne({_id: id}, (err, user) => {
            user.profile = Object.assign(user.profile, req.body.user.profile);

            user.save(function (err) {
                if(err) console.error('ERROR!');

                return res.json(user.profile);
            });
        });

    },

};

export default profileController;
