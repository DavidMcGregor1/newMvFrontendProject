describe("Main page loads and renders content", () => {
  it("Loads Week1 header", () => {
    cy.visit("localhost:3000/welcome/marketing");
    cy.contains("h1", "Week 1").should("be.visible");
  });
  it("Loads Week 1 div sections", () => {
    cy.visit("localhost:3000/welcome/developer");
    cy.contains("h3", "Basic Set up").should("be.visible");
    cy.contains("h3", "Get Compliant").should("be.visible");
    cy.contains("h3", "People to meet").should("be.visible");
    cy.contains("h3", "Resources").should("be.visible");
    cy.contains("h3", "Add Task").should("be.visible");
  });
});
