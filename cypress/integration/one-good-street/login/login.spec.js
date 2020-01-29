//Testing admin login functionality

describe("testing login as admin user", function() {
  it("Visits admin login page as admin user, logs in successfully and sees admin nav bar", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
  });
});

describe("testing login and submitting button with nothing in fields", function() {
  it("Visits admin login page and submits empty fields when logging in, errors appear", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.contains("Submit").click();
  });
});

describe("testing login and submitting button with incorrect fields", function() {
  it("Visits admin login page and submits incorrect fields, errors appear", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("wrong@com.com");
    cy.get("input[name=password]").type("asdf");
    cy.contains("Submit").click();
  });
});