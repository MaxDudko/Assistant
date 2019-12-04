import Express from "express";
import AuthRouter from "./routes/AuthRoutes";

const Router = Express.Router();


Router.use('/auth', AuthRouter);

export default Router;
module.exports = Router;