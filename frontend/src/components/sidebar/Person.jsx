import React from "react";

const Person = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer my-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-bold text-gray-200">BoB the ball</p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1 divider-start"></div>
    </>
  );
};

export default Person;
