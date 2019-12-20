import Mongoose, {Schema} from "mongoose";

const TaskManagerSchema: Schema = new Mongoose.Schema({
    title: String,
    priority: Number,
    date: Date,
    description: String,
    created: {
        type: Date,
        default: Date.now,
    }
});

export default TaskManagerSchema;
