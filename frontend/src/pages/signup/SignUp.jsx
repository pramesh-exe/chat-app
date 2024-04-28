import React from "react";
import Gender from "./Gender.jsx";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full h-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign Up
          <span className="text-blue-600"> ChatApp</span>
        </h1>
        <div className="divider divider-info"></div>
        <form>
          <div for="fullname">
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-primary w-full max-w-xs font-light h-10"
            />
          </div>

          <div for="email">
            <label className="label p-2">
              <span className="text-base label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@xyz.com"
              className="input input-bordered input-primary w-full max-w-xs font-light h-10"
            />
          </div>

          <div for="password">
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full max-w-xs font-light h-10"
            />
          </div>

          <div for="confirmPassword">
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full max-w-xs font-light h-10"
            />
          </div>

          <Gender />

          <a
            href=""
            className="text-sm hover:underline text-blue-600 inline-block "
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-primary btn-sm mt-2 text-white">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
