import {Request, Response, NextFunction} from "express";
import { User } from "../models/Users";

export interface IAppRequest extends Request {
    payload?: any;
}

const profileController = {

    get(req: Request, res: Response) {},

    set(req: Request, res: Response) {},

};

export default profileController;
