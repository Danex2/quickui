import React from "react";
import { Auth } from "aws-amplify";

export const useUser = () => {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        if (currentUser) {
          setUser(true);
        }
        setUser(false);
      } catch (e) {
        setUser(false);
      }
    };
    checkUser();
  }, []);
  return {
    user,
  };
};
