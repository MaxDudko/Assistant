import passport from "passport";
import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

export interface IAppRequest extends Request {
    payload?: any;
}

const authController = {

    register(req: Request, res: Response, next: NextFunction) {
        const { body: { user } } = req;
        console.log('/auth/register: ', req.body);

        if(!user.email) {
            return res.status(422).json({
                errors: {
                    email: 'is Required',
                },
            });
        }

        if(!user.password) {
            return res.status(422).json({
                errors: {
                    password: 'is Required',
                },
            });
        }

        const finalUser = new User(user);

        finalUser.setPassword(user.password);

        return finalUser.save()
            .then(() => res.json({ user: finalUser.toAuthJSON() }));
    },

    // change(req: Request, res: Response, next: NextFunction) {
    //     const { body: { user } } = req;
    //     const { body: { user: {id} } } = req;
    //     console.log(req.body);
    //
    //     if(!user.email) {
    //         return res.status(422).json({
    //             errors: {
    //                 email: 'is Required',
    //             },
    //         });
    //     }
    //
    //     if(!user.password) {
    //         return res.status(422).json({
    //             errors: {
    //                 password: 'is Required',
    //             },
    //         });
    //     }
    //
    //     return User.findById(id)
    //         .then((user) => {
    //             if(!user) {
    //                 return res.sendStatus(400);
    //             }
    //
    //             console.log(user);
    //             return User.updateOne(...user);
    //         });
    // },

    login(req: Request, res: Response, next: NextFunction) {
        const { body: { user } } = req;
        console.log('/auth/login: ', req.body);

        if(!user.email) {
            return res.status(422).json({
                errors: {
                    email: 'is Required',
                },
            });
        }

        if(!user.password) {
            return res.status(422).json({
                errors: {
                    password: 'is Required',
                },
            });
        }

        return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
            if(err) {
                return next(err);
            }

            if(passportUser) {
                const user = passportUser;
                user.token = passportUser.generateJWT();

                return res.json({ user: user.toAuthJSON() });
            }

            return res.status(400).json({
                errors: {
                    password: 'is Required',
                },
            });
        })(req, res, next);
    },

    check(req: IAppRequest, res: Response, next: NextFunction) {
        const { payload: { id } } = req;
        console.log('/auth/get: ', req.body);

        return User.findById(id)
            .then((user) => {
                if(!user) {
                    return res.sendStatus(400);
                }

                return res.json({ user: user.toAuthJSON() });
            });
    },
    
};

export default authController;
