//With validations

//Create item
describe("testing creating item locally", function() {
  it("Visits upload form to create an item, filling in each field and item is successfully uploaded", function() {
    cy.visit("http://localhost:3000");
    cy.contains("LIBRARY").click();
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

//Edit item
describe("testing editing item locally as admin user", function() {
  it("visits admin dashboard to edit an item as an admin user and edits the item successfully with the words testing edit", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("DASHBOARD").click();
    cy.contains("📝").click();
    cy.get("input[name=itemName]").type("testing edit");
    cy.contains("Submit Edit").click();

  });
});

//Viewing item from admin dashboard
describe("testing viewing item locally as admin user from admin table", function() {
  it("Visits admin dashboard as an admin user to view an item by clicking on the item name and views item successfully", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("DASHBOARD").click();
    cy.contains("testtesting edit").click();
   
  });
});

//add the toggle publish, then view the item on library page and click into object. 
describe("testing toggling item to published as admin user", function() {
  it("visits admin dashboard to publish an item as an admin user and the item is then rendered on the library of care things, seen by visiting the library of care things page", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("DASHBOARD").click();
    cy.contains("🔐").click();
    cy.contains("LIBRARY OF CARE THINGS").click();
    cy.contains("DASHBOARD").click();
    cy.contains("🔓").click();
    cy.contains("LIBRARY OF CARE THINGS").click();
  });
});

//delete item
describe("testing deleting item locally as admin user", function() {
  it("Visits admin dashboard as an admin user to delete an item and deletes the item successfully", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("DASHBOARD").click();
    cy.contains("🗑").click();

  });
});
