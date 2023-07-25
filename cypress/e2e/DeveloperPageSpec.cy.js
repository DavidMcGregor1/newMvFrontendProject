describe("Main page loads and renders content", () => {
  it("Loads Week1 header", () => {
    cy.visit("localhost:3000/welcome/developer");
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

describe("Arrows work", () => {
  it("back arrow works", () => {
    cy.visit("localhost:3000/welcome/developer");
    cy.contains("<").click();
    cy.contains("h1", "First month").should("be.visible");
  });
  it("forward arrow works", () => {
    cy.visit("localhost:3000/welcome/developer");
    cy.contains(">").click();
    cy.contains("h1", "First two weeks").should("be.visible");
  });
});

describe("Adding a task to Basic Set Up section", () => {
  it("should add a task to the Basic Set Up section", () => {
    cy.visit("localhost:3000/welcome/developer");

    cy.get("#addTaskInputBox").type("New task to be added");

    cy.get('input[name="section"]').check("Basic Set Up");

    cy.contains("Add Task").parent().find("button").click();

    cy.get(".basicSetUpTaskList").should("contain", "New task to be added");
  });
});
