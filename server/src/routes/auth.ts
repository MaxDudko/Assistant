import Express, {Request} from "express";
import authController from "../controllers/auth";
import auth from "../auth";

const { register, login, check } = authController;

const authRouter = Express.Router();

authRouter.post('/register', auth.optional, register);
authRouter.post('/login', auth.optional, login);
authRouter.get('/get', auth.required, check);

export default authRouter;
