"use server"
import { User } from "./models";
import { Product } from "./models";
import { connectToDatabase } from "./connection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt"
export const addUser = async (formData) => {

 
const { username, email, password, isAdmin, isActive, address, phone } =
    Object.fromEntries(formData);

  try {
    connectToDatabase();
    const Salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,Salt);
    const newUser = new User({
      username,
      email,
      password : hashPassword,
      isAdmin,
      isActive,
      address,
      phone,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't Create User");
  }
  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
};


export const addProduct = async (formData) => {
  const { title, price, size, category, stock, version, about } =
    Object.fromEntries(formData);

    try{
      connectToDatabase()
      const newProduct = new Product({
        title, price, size, category, stock, version, about
      })

      await newProduct.save()

    }catch(err){
      console.log(err)
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")


}