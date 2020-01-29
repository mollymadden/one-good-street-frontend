//empty form 
//trying to upload blank item form
describe("testing upload user form locally with nothing in it", function() {
  it("Visits upload user form to create a new user with nothing", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Admin").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("Manage Users").click();
    cy.contains("Add a New User").click();
    cy.contains("Add User").click();
   
  });
});


//trying to create a new user with an email that already exists in the database - it checks the backend

// describe("testing user form locally - no input", function() {
//   it("Visits user form to create an item", function() {
//     cy.visit("http://localhost:3000");
//     cy.contains("Admin").click();
//     cy.get("input[name=email]").type("admin@com.com");
//     cy.get("input[name=password]").type("admin");
//     cy.contains("Submit").click();
//     cy.contains("Users").click();
//     cy.contains("Add").click();
//     cy.get("input[name=firstName]").invoke('val', '')
//     cy.get("input[name=lastName]").invoke('val', '')
//     cy.get("input[name=email]").invoke('val', '')
//     cy.get("input[name=password]").invoke('val', '')
//     cy.contains("Add").click();
  
//   });
// });