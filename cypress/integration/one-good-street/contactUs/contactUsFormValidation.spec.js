//Checking validations on getting involved form

//Trying to submit blank Contact Us form
describe("testing contact us form locally with nothing in it", function() {
  it("Visits contact us form and tries to submit with nothing and the form cannot be submitted", function() {
    cy.visit("http://localhost:3000");
    cy.get('#icon-bar').find('button').click();
    cy.contains("Submit").click();
  });
});

//trying to submit contact us form with invalid email
describe("Testing of contact us form with invalid email", function() {
  it("Submits a contact us form with invalid email and the form cannot be submitted", function() {
    cy.visit("http://localhost:3000");
    cy.get('#icon-bar').find('button').click();
    cy.get("input[name=name]").type("Test");
    cy.get("input[name=email]").type("testcom.com");
    cy.get("textarea[name=message]").type("test");
    cy.contains("Submit").click();

  });
});