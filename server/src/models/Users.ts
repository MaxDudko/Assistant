import Mongoose, {Schema} from "mongoose";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import ProfileSchema from "./ProfileSchema";
import SettingsSchema from "./SettingsSchema";
import NotificationsSchema from "./NotificationsSchema";

import TaskManagerSchema from "./TaskManagerSchema";

interface IUser extends Mongoose.Document{
    email: string;
    hash: string;
    salt: string;
    password: string;
    registrationDate: string;

    profile: any,
    settings: any,
    notifications: any,

    TaskManager: any,

    setPassword(password: string): any;
    validatePassword(password: string): boolean;
    generateJWT(): any;
    toAuthJSON(): any;
}

const UsersSchema: Schema = new Mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    hash: String,
    salt: String,
    remember: {
        type: Boolean,
    },

    registrationDate: {
        type: Date,
        required: true,
        default: Date.now,
    },

    profile: ProfileSchema,
    settings: SettingsSchema,
    notifications: [NotificationsSchema],

    TaskManager: {
        category: [TaskManagerSchema],
    },

});

UsersSchema.methods.setPassword = function(password: string) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};
UsersSchema.methods.validatePassword = function(password: string) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};
UsersSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(String(expirationDate.getTime() / 1000), 10),

    }, 'secret')
};
UsersSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.email,
        token: this.generateJWT(),
    }
};

export const User = Mongoose.model<IUser>('Users', UsersSchema);
