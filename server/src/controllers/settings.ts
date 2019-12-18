import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

const settingsController = {

    getSettings(req: Request, res: Response) {
        console.log('/settings/get: ', req.body);

        User.findOne({_id: req.body.id}, (err, user) => {
            if(err) console.error('ERROR!');

            return res.json(user.settings)
        })
    },

    updateSettings(req: Request, res: Response) {},

};

export default settingsController;
