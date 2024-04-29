import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full h-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <div className="divider divider-info"></div>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered input-primary w-full max-w-xs font-light"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-200"
          >
            Don't have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-primary btn-sm mt-2 text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
