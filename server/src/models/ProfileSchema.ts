import Mongoose, {Schema} from "mongoose";

const ProfileSchema: Schema = new Mongoose.Schema({
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    birthday: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    }
});

export default ProfileSchema;
