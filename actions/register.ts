"use server"
import { connectDB } from "@lib/mongodb"
import User from "@models/User"
import bcrypt from "bcryptjs";

export const register = async (values: any)=>{    
    const {email, password, first_Name, last_Name} = values;
    console.log('name:', first_Name, 'email:', email);
    try{
        await connectDB();
        const userFound = await User.findOne({email});
        if(userFound){
            return {
                error: "email already exists"
            }
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = new User({
            first_Name, 
            last_Name,
            email,
            password: hashedPassword
        });
        const savedUser = await user.save();
    }catch(e){
        console.log(e)
    }
}
