import Mongoose, {Schema} from "mongoose";

const TaskSchema: Schema = new Mongoose.Schema({
    title: String,
    category: {
        required: true,
        type: String,
    },
    priority: Number,
    date: Date,
    description: String,
    created: {
        type: Date,
        default: Date.now,
    }
});

export default TaskSchema;
