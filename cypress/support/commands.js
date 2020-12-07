// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.visit("/signin");
  cy.get("[data-cy=username]").type("Dane");
  cy.get("[data-cy=password]").type("password");
  cy.contains("button", "Sign In").click();
});

Cypress.Commands.add("register", () => {
  cy.get("[data-cy=username]").type("Dane");
  cy.get("[data-cy=email]").type("dane@gmail.com");
  cy.get("[data-cy=password]").type("password");
  cy.get("[data-cy=password2]").type("password");
  cy.contains("button", "Sign Up").click();
});
