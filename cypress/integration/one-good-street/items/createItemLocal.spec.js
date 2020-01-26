//no validations

describe("testing upload form locally", function() {
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
    cy.get("input[name=phone]").type("test");
    cy.get("input[name=address]").type("test");
    cy.get("input[name=email]").type("test");
    cy.get("select[name=privacy]").select("NotPublishDetails");

    //cy.upload_file(‘nowiknowreact.jpeg’);
    cy.get("input[name=delivery]").check();
    // cy.get("input[name=password]").type("admin");
    // cy.contains("Submit").click();
    // cy.contains("Login").click();
    // cy.contains("Home").click();
    // cy.contains("Sign up").click();
    // cy.contains("Home").click();
    // cy.get("input[name=searchInput]").type("test");
    // cy.contains("Submit").click();
    // cy.get("input[name=searchInput]").clear()
    // cy.get("input[name=searchInput]").type("badman");
    // cy.contains("Submit").click();
    // cy.get("input[name=searchInput]").clear()
    // cy.get("input[name=searchInput]").type("maxs");
    // cy.contains("Submit").click();
    // cy.get("input[name=searchInput]").clear()
    // cy.get("input[name=searchInput]").type("story");
    // cy.contains("Submit").click();
  });
});
