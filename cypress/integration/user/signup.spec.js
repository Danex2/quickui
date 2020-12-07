describe("/signup", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });
  it("Should contain a link to the sign in page", () => {
    cy.contains("Already have an account? Sign In").should(
      "have.attr",
      "href",
      "/signin"
    );
  });
  it("Should return an error if the user already exists", () => {
    cy.get("[data-cy=username]").type("Dane");
    cy.get("[data-cy=email]").type("dane@gmail.com");
    cy.get("[data-cy=password]").type("password");
    cy.get("[data-cy=password2]").type("password");
    cy.contains("button", "Sign Up").click();
    cy.get("[data-cy=error-message]").should("contain", "User already exists");
  });
  // it("Should to go the confirm page if everything is good", () => {
  //   cy.server({
  //     method: "POST",
  //     status: 200,
  //     response: {},
  //   });
  //   cy.get("[data-cy=username]").type("Dane");
  //   cy.get("[data-cy=email]").type("dane@gmail.com");
  //   cy.get("[data-cy=password]").type("password");
  //   cy.get("[data-cy=password2]").type("password");
  //   cy.contains("button", "Sign Up").click();
  //   cy.url().should("eq", "http://localhost:3000/confirm");
  // });
});
