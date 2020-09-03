import React from "react";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

export default function Confirm() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = React.useState<{ message: string } | null>(null);
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const { username, code } = data;
      await Auth.confirmSignUp(username, code);
      Cookie.remove("confirm");
      router.push("/");
    } catch (e) {
      setError(e);
    }
  };
  return (
    <Layout title="Sign Up">
      <div className="flex h-full p-5 md:p-0">
        <div className="hidden w-1/2 h-full bg-gray-900 lg:block"></div>
        <div className="w-full lg:w-1/2">
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
            <p className="mb-3 text-sm text-gray-500">
              Please check your e-mail for a confirmation code.
            </p>
            <input
              type="text"
              name="username"
              className="w-full mb-3 form-input"
              placeholder="Username"
              required
              ref={register}
              autoComplete="off"
            />
            <input
              type="text"
              name="code"
              className="w-full mb-3 form-input"
              placeholder="Code"
              required
              ref={register}
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full py-3 mb-3 font-bold text-white duration-150 bg-gray-900 rounded hover:bg-gray-800"
            >
              Confirm Sign Up
            </button>
            <p className="text-sm text-gray-500">
              Click{" "}
              <span
                className="text-gray-800 cursor-pointer hover:underline"
                onClick={() => router.push("/resend")}
              >
                here
              </span>{" "}
              to resend the confirmation code
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
}
