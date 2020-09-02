import React from "react";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import { useUser } from "hooks/useUser";
import { useRouter } from "next/router";

export default function Resend() {
  const { register, handleSubmit } = useForm();
  const { user } = useUser();
  const [error, setError] = React.useState(null);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const onSubmit = async (data) => {
    try {
      const { username } = data;
      await Auth.resendSignUp(username);
      router.push("/confirm");
    } catch (e) {
      setError(e);
    }
  };
  return (
    <Layout title="Code resend">
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
              A new confirmation code will be sent to your e-mail.
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
            <button
              type="submit"
              className="w-full py-3 mb-3 font-bold text-white duration-150 bg-gray-900 rounded hover:bg-gray-800"
            >
              Resend code
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
