import React from "react";
import Layout from "@/components/Layout";

export default function SignUp() {
  return (
    <Layout title="Sign Up">
      <div className="h-full flex p-5 md:p-0">
        <div className="bg-gray-900 w-1/2 h-full hidden md:block"></div>
        <div className="w-full md:w-1/2">
          <form className="h-full flex flex-col justify-center items-center max-w-sm mx-auto">
            <h1 className="mb-3 font-bold text-gray-900 text-3xl">QuickUI</h1>
            <input
              type="text"
              name="username"
              className="form-input mb-2 w-full"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              className="form-input mb-3 w-full"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white py-3 rounded font-bold hover:bg-gray-800 duration-150 mb-3  w-full"
            >
              Sign Up
            </button>
            <div>
              <span className="text-gray-600 hover:text-gray-900 duration-150">
                Forgot password?
              </span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
