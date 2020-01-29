//Filling in contact us form

describe("Testing of contact us form", function() {
  it("Submits a contact us form successfully and gets to the Thank You page", function() {
    cy.visit("http://localhost:3000");
    cy.get('#icon-bar').find('button').click();
    cy.get("input[name=name]").type("Test");
    cy.get("input[name=email]").type("test@com.com");
    cy.get("textarea[name=message]").type("test");
    cy.contains("Submit").click();

  });
});





