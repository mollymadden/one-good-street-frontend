//validations working

describe("testing user form locally", function() {
  it("Visits user form to create an item", function() {

    cy.visit("http://localhost:3000");
    cy.contains("Admin").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("Users").click();
    cy.contains("Add").click();
    cy.get("input[name=firstName]").type("test").should('have.value', "test");
    cy.get("input[name=lastName]").type("test").should('have.value', "test");
    cy.get("input[name=email]").type("test@com.com").should('have.value', "test@com.com");
    cy.get("input[name=password]").type("testtest").should('have.value', "testtest");
    cy.contains("Add").click();
  
  });
});


