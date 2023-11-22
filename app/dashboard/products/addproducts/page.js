import React from "react";

const page = () => {
  return (
    <div className="container mt-3 bg-indigo-800 rounded-md">
      <p className="place-items-center grid text-2xl font-bold box-border p-3">
        Add Products
      </p>
      <form
        action=""
        className="grid lg:grid-cols-12  [&_input]:rounded-md [&_input]:m-4 [&_input]:p-3 [&_input]:bg-indigo-950"
      >
        <input type="text" placeholder="Title" className="col-span-6" />
        <select
          name=""
          id=""
          placeholder="Category"
          className="col-span-6 m-4 p-3 bg-indigo-950 rounded-md"
        >
          <option value="">Select</option>
          <option value="">Oversized</option>
          <option value="">Normal</option>
          <option value="">Kid</option>
          <option value="">UniSex</option>
        </select>
        <input type="text" placeholder="Price" className="col-span-6" />
        <input type="text" placeholder="Size" className="col-span-6" />
        <input type="text" placeholder="Stock" className="col-span-6" />
        <input type="text" placeholder="Version" className="col-span-6" />
        <textarea
          type="text"
          placeholder="About"
          className="col-span-12 m-4  bg-indigo-950 rounded-md  p-5 my-2  box-border"
        />

        <button className="col-span-12 m-4 p-3 rounded-md hover:bg-orange-500 bg-orange-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
