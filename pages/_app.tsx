import { AppProps } from "next/app";
import React from "react";
import "../css/tailwind.css";
import awsconfig from "../src/aws-exports";
import Amplify from "aws-amplify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const confirmCookie = Cookies.get("confirm");
    if (confirmCookie) {
      router.push("/confirm");
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
