describe("Testing of links a non admin user should NOT have access to", function() {
  it("Should redirect to a you are not authorized view page", function() {
    cy.visit("http://localhost:3000/admin/dashboard");
    cy.visit("http://localhost:3000/users");
    cy.visit("http://localhost:3000/users/add");
  });
});


//editing item listing as non admin user


//deleting item listing as non admin user


//editing user listing as non admin user


//deleting user as non admin user