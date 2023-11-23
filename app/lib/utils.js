import mongoose from "mongoose"

export const ConnectToDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
   
        })
      
    }catch(err){
        console.log(err)
    }

}