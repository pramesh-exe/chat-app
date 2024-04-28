import React from "react";

const Gender = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-white">Male</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500 border-black ml-1"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-white">Female </span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-pink-500 border-gray-900 ml-1"
            checked
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;
