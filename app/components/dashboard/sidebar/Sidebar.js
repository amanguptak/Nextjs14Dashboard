import React from "react";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Menu from "./Menu/Menu";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },

  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
];
import { auth ,signOut} from "@/app/auth";
const Sidebar = async() => {
  const { user } = await auth();
  return (
    <div className="sticky">
      <div className="flex items-center justify-between h-14   px-3 rounded-[10px] mb-3">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Aman Gupta</p>
          </div>
        </div>
      </div>
      {menuItems.map((item, index) => {
        return (
          <div key={index}>
            <p className=" text-sm mb-1 font-bold text-gray-800">
              {item.title}
            </p>
            <ul className="list-none">
              {item.list.map((item, index) => {
                return (
                  <li key={index}>
                    <Menu item={item}></Menu>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      {/* <button className="bg-none border-none flex items-center gap-8 rounded-[8px]  hover:bg-orange-200 hover:text-gray-800 mx-2 p-3 w-[95%]">
        {" "}
        <MdLogout /> Logout{" "}
      </button> */}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="bg-none border-none flex items-center gap-8 rounded-[8px]  hover:bg-orange-200 hover:text-gray-800 mx-2 p-3 w-[95%]">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
