import { useRouter } from "next/router";
import React from "react";
import { Auth } from "aws-amplify";

export default function Protected(Component) {
  return () => {
    const router = useRouter();

    React.useEffect(() => {
      Auth.currentAuthenticatedUser()
      .catch(() => router.push("/signin"));
    }, []);

    return <Component {...arguments} />;
  };
}
