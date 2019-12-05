import Express, {Request} from "express";
import profileController from "../controllers/profile";

const {get, set} = profileController;

const profileRouter = Express.Router();

profileRouter.get('/get', get);
profileRouter.post('/set', set);

export default profileRouter;
