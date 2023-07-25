// npx cypress open

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

describe("Tester page loads on click", () => {
  it("should navigate to the Tester Page on Tester card click", () => {
    cy.visit("localhost:3000/");
    cy.contains("Tester").click();
    cy.url().should("include", "/welcome/tester");
    cy.contains("h1", "Week 1").should("be.visible");
  });
});

describe("Operations page loads on click", () => {
  it("should navigate to the Operations Page on Operations card click", () => {
    cy.visit("localhost:3000/");
    cy.contains("Operations").click();
    cy.url().should("include", "/welcome/operations");
    cy.contains("h1", "Week 1").should("be.visible");
  });
});

describe("Marketing page loads on click", () => {
  it("should navigate to the Marketing Page on Marketing card click", () => {
    cy.visit("localhost:3000/");
    cy.contains("Marketing").click();
    cy.url().should("include", "/welcome/marketing");
    cy.contains("h1", "Week 1").should("be.visible");
  });
});
