import React from "react";
import { render, screen } from "@testing-library/react";
import Signin from "../pages/signin";
import AuthProvider from "../context/AuthContext";

describe("Testing the Sign in screen", () => {
  it("Should show an error if the fields are empty", async () => {
    const { getByPlaceholderText } = render(
      <AuthProvider>
        <Signin />
      </AuthProvider>
    );
    screen.debug();
  });
});
