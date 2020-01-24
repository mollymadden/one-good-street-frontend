describe("My First Test", function() {
  it("Visits netlify link for deployment and logs in as admin", function() {
    cy.visit("https://one-good-street.netlify.com/");
    cy.contains("Admin").click();
    cy.get("input[name=email]").type("admin@com.com");
    cy.get("input[name=password]").type("admin");
    cy.contains("Submit").click();
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
