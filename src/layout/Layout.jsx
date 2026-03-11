import React, { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import { Outlet } from "react-router";
import { Menu, X } from "lucide-react";
import { useUser } from "@clerk/react";

const Layout = () => {
  const {user} = useUser();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return user ? (
    <div className="w-full flex h-screen">
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
      <div className="flex-1 bg-slate-50">
        <Outlet />
      </div>
      {sideBarOpen
        ? (
          <X onClick={()=>setSideBarOpen(false)} className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden" />
        )
        : (
          <Menu onClick={()=>setSideBarOpen(true)} className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden" />
        )}
    </div>
  ): (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border border-t-transparent animate-spin"></div>
    </div>
  )
};

export default Layout;
