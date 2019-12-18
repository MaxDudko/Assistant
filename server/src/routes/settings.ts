import Express, {Request} from "express";
import settingsController from "../controllers/settings";

const {getSettings, updateSettings} = settingsController;

const settingsRouter = Express.Router();

settingsRouter.get('/get', getSettings);
settingsRouter.post('/update', updateSettings);

export default settingsRouter;
