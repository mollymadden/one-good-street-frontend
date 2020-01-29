//Checking validations on item form


//trying to upload blank item form
describe("testing upload form locally with nothing in it", function() {
  it("Visits upload form to create an item, tries to submit with nothing and item cannot be created as form cannot be submitted due to required fields", function() {
    cy.visit("http://localhost:3000");
    cy.contains("LIBRARY OF CARE THINGS").click();
    cy.contains("Upload").click();

    cy.contains("Add Item").click();
   
  });
});


//Entering incorrect email format
describe("Entering incorrect email format", function() {
  it("User Visits upload form to create an item with incorrect email format and item does not created as form cannot be submitted due to incorrect email format", function() {
    cy.visit("http://localhost:3000");
    cy.contains("LIBRARY OF CARE THINGS").click();
    cy.contains("Upload").click();
    cy.contains("Add Item").click();
    cy.visit("http://localhost:3000");
    cy.contains("LIBRARY OF CARE THINGS").click();
    cy.contains("Upload").click();
    cy.get("input[name=itemName]").type("test");
    cy.get("input[name=headline]").type("test");
    cy.get("input[name=description]").type("test");
    cy.get("select[name=category]").select("Bedroom");
    cy.get("input[name=postcode]").type("test");
    cy.get("input[name=firstName]").type("test");
    cy.get("input[name=lastName]").type("test");
    cy.get("input[name=phone]").type("98576346");
    cy.get("input[name=address]").type("test");
    cy.get("input[name=email]").type("test");
    cy.get("select[name=privacy]").select("NotPublishDetails");
    cy.get("input[name=delivery]").check();
    cy.contains("Add Item").click();
  });
});

