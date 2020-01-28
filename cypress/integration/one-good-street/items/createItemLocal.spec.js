//With validations

//Create item
describe("testing creating item locally", function() {
  it("Visits upload form to create an item", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Library").click();
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
    cy.get("input[name=email]").type("test@com.com");
    cy.get("select[name=privacy]").select("NotPublishDetails");
    cy.get("input[name=delivery]").check();
    cy.contains("Add Item").click();
    
  });
});


//delete item
describe("testing editing item locally as admin user", function() {
  it("Visits admin dashboard to edit an item", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Admin").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("Dashboard").click();
    cy.contains("🗑").click();

  
  });
});
