//Filling in Get Involved form 

describe("Testing of get involved form", function() {
  it("Submits a get involved form successfully and gets to the Thank You page", function() {
    cy.visit("http://localhost:3000");
    cy.contains("GET INVOLVED").click();
    cy.get("input[name=firstName]").type("Test");
    cy.get("input[name=lastName]").type("test");
    cy.get("input[name=address]").type("test");
    cy.get("input[name=email]").type("test@com.com");
    cy.get("input[name=phone]").type("123456");
    cy.get("select[name=services]").select("Volunteer");
    cy.get("textarea[name=comments]").type("test");
    cy.contains("Submit").click();

  });
});





