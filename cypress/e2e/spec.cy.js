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
