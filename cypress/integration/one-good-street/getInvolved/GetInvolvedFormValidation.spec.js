//Checking validations on getting involved form

//Trying to submit blank getting involved form
describe("testing getting involved form locally with nothing in it", function() {
  it("Visits getting involved form and tries to submit with nothing and the form cannot be submitted", function() {
    cy.visit("http://localhost:3000");
    cy.contains("GET INVOLVED").click();
    cy.contains("Submit").click();
   
  });
});

//trying to submit getting involved form with invalid email
describe("Testing of get involved form with invalid email", function() {
  it("Submits a get involved form with invalid email and the form cannot be submitted", function() {
    cy.visit("http://localhost:3000");
    cy.contains("GET INVOLVED").click();
    cy.get("input[name=firstName]").type("Test");
    cy.get("input[name=lastName]").type("test");
    cy.get("input[name=address]").type("test");
    cy.get("input[name=email]").type("testcom.com");
    cy.get("input[name=phone]").type("123456");
    cy.get("select[name=services]").select("Volunteer");
    cy.get("textarea[name=comments]").type("test");
    cy.contains("Submit").click();

  });
});