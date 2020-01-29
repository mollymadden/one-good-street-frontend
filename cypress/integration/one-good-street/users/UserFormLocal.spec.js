//validations working


//Add a new user
describe("testing user form locally as an admin", function() {
  it("Logs in as admin user to create a new user", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Admin").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("Users").click();
    cy.contains("Add a New User").click();
    cy.get("input[name=firstName]").type("test").should('have.value', "test");
    cy.get("input[name=lastName]").type("test").should('have.value', "test");
    cy.get("input[name=email]").type("test@com.com").should('have.value', "test@com.com");
    cy.get("input[name=password]").type("testtest").should('have.value', "testtest");
    cy.contains("Add User").click();
  
  });
});

//Edit user
describe("testing editing user locally as admin user", function() {
  it("Visits admin dashboard to edit a user", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Admin").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("Manage Users").click();
    cy.contains("📝").click();
    cy.get("input[name=firstName]").type("testing edit");
    cy.contains("Submit Edit").click();

  });
});


//delete user
describe("testing deleting user locally as admin user", function() {
  it("Visits admin dashboard to delete a user", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Admin").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("Manage Users").click();
    cy.contains("🗑").click();
  });
});


