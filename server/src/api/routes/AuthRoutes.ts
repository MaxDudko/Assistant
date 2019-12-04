import Express from "express";
import AuthController from "../controllers/AuthController";
import auth from "../auth";

const { registerController, loginController, getCurrentController } = AuthController;

const AuthRouter = Express.Router();

AuthRouter.post('/register', auth.optional, registerController);
AuthRouter.post('/login', auth.optional, loginController);
AuthRouter.get('/get', auth.required, getCurrentController);

export default AuthRouter;
