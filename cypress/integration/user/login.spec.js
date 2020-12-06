describe("/signin", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("Lands on the homepage on first launch", () => {
    cy.contains("button", "Sign In");
  });

  it("Has a link to the sign up page", () => {
    cy.contains("No account? Sign Up").should("have.attr", "href", "/signup");
  });

  it("Shows an error message if the user does not exist", () => {
    cy.get("[data-cy=username]").type("sdf");
    cy.get("[data-cy=password]").type("fgafawefr");
    cy.contains("button", "Sign In").click();
    cy.get("[data-cy=error-message]").should("contain", "User does not exist.");
  });

  it("Shows an error message if the username or password is incorrect", () => {
    cy.get("[data-cy=username]").type("Dane");
    cy.get("[data-cy=password]").type("pass");
    cy.contains("button", "Sign In").click();
    cy.get("[data-cy=error-message]").should(
      "contain",
      "Incorrect username or password."
    );
  });

  it("Should redirect to the home page on successful login", () => {
    cy.get("[data-cy=username]").type("Dane");
    cy.get("[data-cy=password]").type("password");
    cy.contains("button", "Sign In").click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });
});
