import passport from "passport";
import {Request, Response, NextFunction} from "express";
import { User } from "../../models/Users";

const AuthController = {
    registerController(req: Request, res: Response) {
        const { body: { user } } = req;
        console.log(req.body);
        if(!user.email) {
            return res.status(422).json({
                errors: {
                    email: 'is required',
                },
            });
        }

        if(!user.password) {
            return res.status(422).json({
                errors: {
                    password: 'is required',
                },
            });
        }

        const finalUser = new User(user);

        finalUser.setPassword(user.password);

        return finalUser.save()
            .then(() => res.json({ user: finalUser.toAuthJSON() }));
    },

    loginController(req: Request, res: Response, next: NextFunction) {
        const { body: { user } } = req;
        console.log(req.body);

        if(!user.email) {
            return res.status(422).json({
                errors: {
                    email: 'is required',
                },
            });
        }

        if(!user.password) {
            return res.status(422).json({
                errors: {
                    password: 'is required',
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

            return status(400).info;
        })(req, res, next);
    },

    getCurrentController(req: Request, res: Response, next: NextFunction) {
        const { payload: { id } } = req;

        return User.findById(id)
            .then((user) => {
                if(!user) {
                    return res.sendStatus(400);
                }

                return res.json({ user: user.toAuthJSON() });
            });
    },
};

export default AuthController;
