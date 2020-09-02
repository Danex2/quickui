import React from "react";
import { Hub, Auth } from "aws-amplify";

export const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((currentUser) => setUser(currentUser))
      .catch(() => setUser(null));
  }, []);

  React.useEffect(() => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          setUser(null);
          window.localStorage.clear();
          break;
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
