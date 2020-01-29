//empty form 
//trying to upload blank item form
describe("testing create user form locally with nothing in it", function() {
  it("Visits upload user form to create a new user with nothing filled in and user cannot be created", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("MANAGE USERS").click();
    cy.contains("Add a New User").click();
    cy.contains("Add User").click();
   
  });
});


//trying to create a new user with an email that already exists in the database - it checks the backend

describe("testing create user form locally - creating user with an email already found in database", function() {
  it("Visits user form to create an item with an email that already exists and user cannot be created", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("MANAGE USERS").click();
    cy.contains("Add a New User").click();
    cy.get("input[name=firstName]").type("admin")
    cy.get("input[name=lastName]").type("admin")
    cy.get("input[name=email]").type("admin@com.com")
    cy.get("input[name=password]").type("admin")
    cy.contains("Add User").click();
  
  });
});


//trying to create a new user with invalid email

describe("testing create user form locally - creating user with an invalid email", function() {
  it("Visits user form to create an item with an invalid email and the new user cannot be created", function() {
    cy.visit("http://localhost:3000");
    cy.contains("ADMIN").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
    cy.contains("MANAGE USERS").click();
    cy.contains("Add a New User").click();
    cy.get("input[name=firstName]").type("admin")
    cy.get("input[name=lastName]").type("admin")
    cy.get("input[name=email]").type("admincom.com")
    cy.get("input[name=password]").type("admin")
    cy.contains("Add User").click();
  
  });
});