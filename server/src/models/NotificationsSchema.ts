import Mongoose, {Schema} from "mongoose";

const NotificationsSchema: Schema = new Mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    from: {
        type: String,
    },
    date: {
        type: String,
    },
    text: {
        type: String,
    },
    check: {
        type: Boolean,
    },
});

export default NotificationsSchema;
