import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

const profileController = {

    getProfileData(req: Request, res: Response) {
        console.log('/profile/get: ', req.body);

        User.findOne({_id: req.body.id}, (err, user) => {
            if(err) console.error('ERROR!');

            if(user.profile) {
                let {firstName, lastName, birthday, location, avatar} = user.profile;
                let sources = {
                    id: user._id,
                    email: user.email,
                    registrationDate: user.registrationDate,
                    firstName: firstName || null,
                    lastName: lastName || null,
                    birthday: birthday || null,
                    location: location || null,
                    avatar: avatar || null
                };
                let profileData = Object.assign({}, sources);
                console.log(profileData);
                return res.json(profileData)
            } else {
                let sources = {
                    id: user._id,
                    email: user.email,
                    registrationDate: user.registrationDate,
                };
                let profileData = Object.assign({}, sources);
                console.log(profileData);
                return res.json(profileData)
            }

        });
    },

    updateProfileData(req: Request, res: Response) {
        console.log('/profile/update: ', req.body);

        User.update({_id: req.body.user.id}, {$set: {profile: req.body.user.data}},  (err, user) =>  {
            if (err) {
                return res.send('error updated');
            }
            return res.send("updated");
        })

    },

};

export default profileController;
