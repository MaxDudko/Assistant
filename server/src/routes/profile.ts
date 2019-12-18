import Express, {Request} from "express";
import profileController from "../controllers/profile";

const {getProfileData, updateProfileData} = profileController;

const profileRouter = Express.Router();

profileRouter.post('/get', getProfileData);
profileRouter.post('/update', updateProfileData);

export default profileRouter;
