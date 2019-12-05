import Express, {Request} from "express";
import settingsController from "../controllers/settings";

const {get, set} = settingsController;

const settingsRouter = Express.Router();

settingsRouter.get('/get', get);
settingsRouter.post('/set', set);

export default settingsRouter;
