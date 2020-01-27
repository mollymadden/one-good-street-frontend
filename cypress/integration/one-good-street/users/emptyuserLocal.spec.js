//empty form 
//Now with validations working
describe("testing user form locally - no input", function() {
  it("Visits user form to create an item", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Admin").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("Users").click();
    cy.contains("Add").click();
    cy.get("input[name=firstName]").invoke('val', '')
    cy.get("input[name=lastName]").invoke('val', '')
    cy.get("input[name=email]").invoke('val', '')
    cy.get("input[name=password]").invoke('val', '')
    cy.contains("Add").click();
  
  });
});