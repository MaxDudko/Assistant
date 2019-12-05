import Mongoose, {Schema} from "mongoose";

const NotificationsSchema: Schema = new Mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    message: {
        type: String,
        required: true
    },
    check: {
        type: Boolean,
        required: true,
        default: false,
    },
});

export default NotificationsSchema;