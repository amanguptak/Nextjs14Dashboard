import { User } from "./models"
import {connectToDatabase} from "./connection"

export const getAllUsers = async()=>{

    try{
        connectToDatabase();
       const users = await User.find(); 
       return users
    }catch(err){
        console.log(err)
      
    }
}