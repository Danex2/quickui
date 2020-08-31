import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function SignIn() {
  return (
    <Layout title="Sign In">
      <Link href="/">
        <div className="absolute top-0 text-gray-600 hover:text-gray-900 right-0 mr-10 mt-5 flex items-center space-x-2 uppercase text-xs font-bold duration-150 cursor-pointer">
          <span className="inline-block">Back to search</span>
          <span className="inline-block">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="arrow-narrow-right w-6 h-6 inline"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </Link>
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
              className="bg-gray-900 text-white py-3 rounded font-bold hover:bg-gray-800 duration-150 mb-3 w-full"
            >
              Sign In
            </button>
            <div className="flex justify-between w-full text-sm">
              <span className="text-gray-600 hover:text-gray-900 duration-150 font-semibold inline-block">
                Forgot password?
              </span>
              <span className="text-gray-600 hover:text-gray-900 duration-150 font-semibold inline-block">
                <Link href="/signup">
                  <a>No account? Sign Up</a>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
