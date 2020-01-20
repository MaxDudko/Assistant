import Express, {Request} from "express";
import TaskManagerController from "../controllers/TaskManager";

const {getTasks, createTask, updateTask, deleteTask} = TaskManagerController;

const TaskManagerRouter = Express.Router();

TaskManagerRouter.post('/get', getTasks);
TaskManagerRouter.post('/create', createTask);
TaskManagerRouter.post('/update', updateTask);
TaskManagerRouter.post('/delete', deleteTask);

export default TaskManagerRouter;
