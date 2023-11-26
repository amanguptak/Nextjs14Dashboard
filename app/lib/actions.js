import { User } from "./models";
import { connectToDatabase } from "./connection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {
    "use server"
    console.log("Data", formData)
  const { username, email, password, isAdmin, isActive, address, phone } =
    Object.fromEntries(formData);
  try {
    connectToDatabase();
    const newUser = new User({
      username,
      email,
      password,
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
