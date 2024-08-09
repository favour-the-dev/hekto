import mongoose, {Schema, model} from "mongoose";

export interface UserDocument{
    _id: string;
    first_Name: string;
    last_Name: string;
    email: string;
    password: string;
    profile_photo: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
    first_Name: {
        type: String,
        required: [true, "First name is required"],
    },
    last_Name: {
        type: String,
        required: [true, "Last name is required"],
    }
},  
{
    timestamps: true
})

const  User  =  mongoose.models?.User  ||  model<UserDocument>('User', UserSchema);
export  default  User;