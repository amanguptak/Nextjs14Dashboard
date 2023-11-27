import { User } from "./models"
import {connectToDatabase} from "./connection"
import { Product } from "./models";
export const getAllUsers = async()=>{

    try{
        connectToDatabase();
       const users = await User.find(); 
       return users
    }catch(err){
        console.log(err)
      
    }
}

export const getAllProducts = async()=>{
    try{
        connectToDatabase();
       const products = await Product.find(); 
       return products
    }catch(err){
        console.log(err)
      
    }
}