import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import Convertations from "./Convertations";

const Sidebar = () => {
  return (
    <div className="w-1/5 border-slate-500 p-4 flex flex-col">
      <div>
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-full flex"
          />
          <button
            type="submit"
            className="btn btn-circle bg-sky-500 text-white"
          >
            <FaSearch className="w-6 h-6 outline-none" />
          </button>
        </form>
      </div>
      <div className="divider px-3 divider-primary"></div>
      <Convertations />
      <div className="mt-auto">
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
