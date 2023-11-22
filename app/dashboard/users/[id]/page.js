import React from "react";
import Image from "next/image";
const SingleUser = () => {
  return (
    <div className="container grid grid-cols-12 mt-4 ">
      <div className="left col-span-12 lg:col-span-4 p-3 bg-indigo-900 rounded-md hover:bg-indigo-800 cursor-pointer lg:h-fit">
        <div className="card">
          <img
            className="rounded-md h-fit"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt=""
          />
          <p className="font-bold text-2xl mt-2 text-center">Yuri Chan</p>
        </div>
      </div>
      <div className="right col-span-12 lg:col-span-8 rounded-md mx-2 border-box bg-indigo-900">
        <p className="place-items-center grid text-2xl font-bold box-border  mt-2">
          Edit User
        </p>
        <form
          action=""
          className="flex-col rounded-md p-4 [&_div]:mt-2 text-sm [&_input]:rounded-md"
        >
          <div className="field flex flex-col ">
            <label htmlFor="username" className="mb-2">
              UserName
            </label>
            <input type="text" id="username" className="bg-indigo-950 p-3 " />
          </div>
          <div className="field flex flex-col ">
            <label htmlFor="username" className="mb-2">
              Email
            </label>
            <input type="text" id="username" className="bg-indigo-950 p-3 " />
          </div>
          <div className="field flex flex-col ">
            <label htmlFor="username" className="mb-2">
              Password
            </label>
            <input type="text" id="username" className="bg-indigo-950 p-3 " />
          </div>
          <div className="field flex flex-col ">
            <label htmlFor="username" className="mb-2">
              Address
            </label>
            <input type="text" id="username" className="bg-indigo-950 p-3 " />
          </div>
          <div className="field flex flex-col ">
            <label htmlFor="username" className="mb-2">
              MobNo.
            </label>
            <input type="text" id="username" className="bg-indigo-950 p-3 " />
          </div>
          <div className="field flex flex-col ">
            <label htmlFor="username" className="mb-2">
              IsAdmin
            </label>
            <select
              type="text"
              id="username"
              className="bg-indigo-950 p-3 rounded-md w-[100%]"
            >
              <option value="">Select</option>
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          {/* <div className='field flex flex-col '>
            <label htmlFor="username" className='mb-2'>UserName</label>
                <input type="text" id="username" className='bg-indigo-950 p-3 '/>
            </div> */}
          <button className=" w-full mt-4  p-3 rounded-md hover:bg-orange-500 bg-orange-400">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
