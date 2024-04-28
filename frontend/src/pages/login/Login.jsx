import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full h-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <div className="divider divider-info"></div>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered input-primary w-full max-w-xs font-light"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered input-primary w-full max-w-xs font-light"
            />
          </div>

          <a
            href=""
            className="text-sm hover:underline text-blue-600 mt-2 inline-block "
          >
            Don't have an account?
          </a>

          <div>
            <button className="btn btn-block btn-primary btn-sm mt-2 text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
