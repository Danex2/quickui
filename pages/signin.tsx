import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  const [error, setError] = React.useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout title="Sign In">
      <Link href="/">
        <div className="absolute top-0 right-0 flex items-center mt-5 mr-10 space-x-2 text-xs font-bold text-gray-600 uppercase duration-150 cursor-pointer hover:text-gray-900">
          <span className="inline-block">Back to search</span>
          <span className="inline-block">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline w-6 h-6 arrow-narrow-right"
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
      <div className="flex h-full p-5 md:p-0">
        <div className="hidden w-1/2 h-full bg-gray-900 md:block"></div>
        <div className="w-full md:w-1/2">
          <form
            className="relative flex flex-col items-center justify-center h-full max-w-sm mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            {error && (
              <div className="absolute bottom-0 max-w-sm p-5 mb-20 text-red-800 bg-red-300 rounded">
                <p>{error.message}</p>
              </div>
            )}
            <h1 className="mb-3 text-3xl font-bold text-gray-900">QuickUI</h1>
            <input
              type="text"
              name="username"
              className="w-full mb-2 form-input"
              placeholder="Username"
              required
              ref={register}
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              className="w-full mb-3 form-input"
              placeholder="Password"
              required
              ref={register}
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full py-3 mb-3 font-bold text-white duration-150 bg-gray-900 rounded hover:bg-gray-800"
            >
              Sign In
            </button>
            <div className="flex justify-between w-full text-sm">
              <span className="inline-block font-semibold text-gray-600 duration-150 hover:text-gray-900">
                Forgot password?
              </span>
              <span className="inline-block font-semibold text-gray-600 duration-150 hover:text-gray-900">
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
