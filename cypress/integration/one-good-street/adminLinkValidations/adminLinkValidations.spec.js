
//Testing admin dashboard

describe("Testing of links a non admin user should NOT have access to", function() {
  it("Should redirect to a you are not authorized view page", function() {
    cy.visit("http://localhost:3000/admin/dashboard");
    cy.visit("http://localhost:3000/users");
    cy.visit("http://localhost:3000/users/add");
    cy.visit("http://localhost:3000/items/edit/5e2a3d4420965a7591448d9e");
    cy.visit("http://localhost:3000/items/delete/5e2a3d4420965a7591448d9e");
    cy.visit("http://localhost:3000/users/edit/5e2e56717a5d27f4e6b8d080");
    cy.visit("http://localhost:3000/users/delete/5e2e56717a5d27f4e6b8d080");

  });
});
