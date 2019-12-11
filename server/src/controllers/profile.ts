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
        console.log('/profile/get: ', req.body);

        User.findOne({_id: id}, (err, user) => {
            if(err) console.error('ERROR!');

            // console.log(user.profile);
            // console.log(user.email);
            // console.log(user.registrationDate);
            let {firstName, lastName, birthday, location, avatar} = user.profile;
            let profileData = Object.assign({},
                {id: user._id},
                {email: user.email},
                {registrationDate: user.registrationDate},
                {firstName: firstName},
                {lastName: lastName},
                {birthday: birthday},
                {location: location},
                {avatar: avatar}
                );
            console.log(profileData);
            return res.json(profileData)
        });
    },

    updateProfileData(req: Request, res: Response) {
        // const { body: { user } } = req;
        const { body: { user: {id} } } = req;
        console.log('/profile/update: ', req.body);


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
