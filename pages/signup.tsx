import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { useSubmitting } from "../hooks/useSubmitting";
import Cookies from "js-cookie";

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = React.useState<{ message: string | null }>(null);

  const router = useRouter();

  const { submitting, setSubmitting } = useSubmitting();

  const onSubmit = async (data) => {
    try {
      const { username, password, email } = data;

      await Auth.signUp({
        username,
        password,
        attributes: { email },
      })
        .then(() => setSubmitting(true))
        .then(() => {
          Cookies.set("confirm", "true", { sameSite: "strict" });
        })
        .then(() => router.push("/confirm"))
        .then(() => setSubmitting(false));
    } catch (e) {
      setError(e);
      setSubmitting(false);
    }
  };
  return (
    <Layout title="Sign Up">
      <div className="flex h-full p-5 md:p-0">
        <div className="hidden w-1/2 h-full bg-gray-900 md:block">
          <img src="/login.jpg" alt="" className="object-cover h-full" />
        </div>
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
              className="w-full mb-3 form-input"
              placeholder="Username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              className="w-full mb-3 form-input"
              placeholder="E-mail"
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
            <input
              type="password"
              name="password2"
              className="w-full mb-3 form-input"
              placeholder="Confirm Password"
              required
              ref={register}
              autoComplete="off"
            />
            <button
              disabled={submitting ? true : false}
              type="submit"
              className="w-full py-3 mb-3 font-bold text-white duration-150 bg-gray-900 rounded hover:bg-gray-800"
            >
              Sign Up
            </button>
            <div className="flex justify-between w-full text-sm">
              <span className="inline-block font-semibold text-gray-600 duration-150 hover:text-gray-900">
                <Link href="/signin">
                  <a>Already have an account? Sign In</a>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
