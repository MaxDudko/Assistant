import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

export interface IAppRequest extends Request {
    payload?: any;
}

const settingsController = {

    getSettings(req: Request, res: Response) {},

    updateSettings(req: Request, res: Response) {},

};

export default settingsController;
