import Express, {Request} from "express";
import TaskManagerController from "../controllers/TaskManager";

const {getTasks, setTask, updateTask, deleteTask} = TaskManagerController;

const TaskManagerRouter = Express.Router();

TaskManagerRouter.post('/get', getTasks);
TaskManagerRouter.post('/create', setTask);
TaskManagerRouter.post('/update', updateTask);
TaskManagerRouter.delete('/delete', deleteTask);

export default TaskManagerRouter;
