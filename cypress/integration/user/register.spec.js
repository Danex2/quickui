describe("/signup", () => {
  it("Should contain a link to the sign in page", () => {
    cy.contains("Already have an account? Sign In").should(
      "have.attr",
      "href",
      "/signin"
    );
  });
});
