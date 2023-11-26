import React from "react";

const AddUser = () => {
  return (
    <div className="container mt-3 bg-indigo-800 rounded-md">
      <p className="place-items-center grid text-2xl font-bold box-border p-3">
        Add Users
      </p>
      <form
        action=""
        className="grid lg:grid-cols-12   [&_input]:rounded-md [&_input]:m-4 [&_input]:p-3 [&_input]:bg-indigo-950"
      >
        <input type="text" placeholder="Name" name="username" className="col-span-6" />
        <select
          name="isAdmin"
          id="isAdmin"
       
          className="col-span-6 m-4 p-3 bg-indigo-950 rounded-md"
        >
          <option value="">isAdmin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
         
        </select>

        <select
          name="isActive"
          id="isActive"
        
          className="col-span-6 m-4 p-3 bg-indigo-950 rounded-md"
        >
          <option value="">isActive</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
         
        </select>
        <input type="email" placeholder="Email" name="email" className="col-span-6" />
        <input type="password" placeholder="Password" name="password" className="col-span-6" />
        <input type="number" placeholder="Phone" name="phone" className="col-span-6" />
        <input type="text" placeholder="Address" name="address" className="col-span-12" />
      

        <button type="submit" className="col-span-12 m-4 p-3 rounded-md hover:bg-orange-500 bg-orange-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
