import Mongoose, {Schema} from "mongoose";

const TaskSchema: Schema = new Mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    priority: Number,
    date: {
        required: true,
        type: String,
    },
    description: String,
    created: {
        type: Date,
        default: Date.now,
    }
});

export default TaskSchema;
