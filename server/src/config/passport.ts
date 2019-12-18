import Mongoose from "mongoose";
import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";

const Users = Mongoose.model('Users');

passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]',
}, (email: string, password: string, done: any) => {
    Users.findOne({email})
        .then((user) => {
            if(!user || !user.validatePassword(password)) {
                return done(null, false, {
                    errors: {
                        'email or password': 'is valide'
                    }
                });
            }

            return done(null, user);
        })
        .catch(done)
}));
