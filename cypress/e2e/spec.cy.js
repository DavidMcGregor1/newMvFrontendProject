describe("Main page loads and renders content", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
    cy.contains("Please select your new role");
    cy.contains("Developer");
    cy.contains("Tester");
    cy.contains("Operations");
    cy.contains("Marketing");
    cy.contains("Product Manager");
    cy.contains("Delivery Manager");
  });
});

describe("Developer page loads on click", () => {
  it("should navigate to the Developer Page on Developer card click", () => {
    cy.visit("localhost:3000/");
    cy.contains("Developer").click();
    cy.url().should("include", "/welcome/developer");
    cy.contains("h1", "Week 1").should("be.visible");
  });
});
