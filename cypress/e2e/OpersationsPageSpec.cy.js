describe("Main page loads and renders content", () => {
  it("Loads Week1 header", () => {
    cy.visit("localhost:3000/welcome/operations");
    cy.contains("h1", "Week 1").should("be.visible");
  });
  it("Loads Week 1 div sections", () => {
    cy.visit("localhost:3000/welcome/operations");
    cy.contains("h3", "Basic Set up").should("be.visible");
    cy.contains("h3", "Get Compliant").should("be.visible");
    cy.contains("h3", "People to meet").should("be.visible");
    cy.contains("h3", "Resources").should("be.visible");
    cy.contains("h3", "Add Task").should("be.visible");
  });
});

describe("Arrows work", () => {
  it("back arrow works", () => {
    cy.visit("localhost:3000/welcome/operations");
    cy.contains("<").click();
    cy.contains("h1", "First month").should("be.visible");
  });
  it("forward arrow works", () => {
    cy.visit("localhost:3000/welcome/operations");
    cy.contains(">").click();
    cy.contains("h1", "First two weeks").should("be.visible");
  });
});

// ---------- WEEK 1 TESTS --------

describe("Adding a task to Basic Set Up section", () => {
  it("should add a task to the Basic Set Up section", () => {
    cy.visit("localhost:3000/welcome/operations");

    cy.get("#opsWeek1AddTaskInputBox").type("New task to be added");

    cy.get('input[name="section"]').check("Basic Set Up");

    cy.contains("Add Task").parent().find("button").click();

    cy.get(".basicSetUpTaskList").should("contain", "New task to be added");
  });
});

describe("Adding a task to Get Compliant section", () => {
  it("should add a task to the Get Compliant section", () => {
    cy.visit("localhost:3000/welcome/operations");

    cy.get("#opsWeek1AddTaskInputBox").type(
      "New get compliant task to be added"
    );

    cy.get('input[name="section"]').check("Get Compliant");

    cy.contains("Add Task").parent().find("button").click();

    cy.get(".getCompliantTaskList").should(
      "contain",
      "New get compliant task to be added"
    );
  });
});

describe("Adding a task to People to meet", () => {
  it("should add a task to the people to meet section", () => {
    cy.visit("localhost:3000/welcome/operations");

    cy.get("#opsWeek1AddTaskInputBox").type("New person to be added");

    cy.get('input[name="section"]').check("People to meet");

    cy.contains("Add Task").parent().find("button").click();

    cy.get(".peopleToMeetList").should("contain", "New person to be added");
  });
});

// ---------- FIRST TWO WEEKS TESTS --------

describe("Adding a task to get up to speed", () => {
  it("should add a task to the get up to speed section", () => {
    cy.visit("localhost:3000/welcome/operations");
    cy.contains(">").click();
    cy.get("#opsFirstTwoWeeksAddTaskInputBox").type(
      "New get up to speed task to be added"
    );

    cy.get('input[name="section"]').check("Get Up To Speed");

    cy.get(".opsFirstTwoWeeksAddTaskButtonDiv").click();

    cy.get(".getUpToSpeedTasksList").should(
      "contain",
      "New get up to speed task to be added"
    );
  });
});

describe("Adding a task to Savings Specific Tasks", () => {
  it("should add a task to the savings specific tasks section", () => {
    cy.visit("localhost:3000/welcome/operations");
    cy.contains(">").click();
    cy.get("#opsFirstTwoWeeksAddTaskInputBox").type(
      "New savings specific task to be added"
    );
    cy.get('input[name="section"]').check("Savings Specific Tasks");
    cy.get(".opsFirstTwoWeeksAddTaskButtonDiv").click();
    cy.get(".savingsSpecificTasksList").should(
      "contain",
      "New savings specific task to be added"
    );
  });
});

describe("Reflection Points alert is shown on submit", () => {
  it("should show the alert when the submit button is clicked", () => {
    cy.visit("localhost:3000/welcome/operations");

    cy.window().then((win) => {
      cy.spy(win, "alert").as("alert");
    });
    cy.contains(">").click();
    cy.get("#opsFirstTwoWeeksAddReflectionPointInputBox").type(
      "New reflection point to be added"
    );
    cy.get(".FirstTwoWeeksSubmitReflectionButtonDiv").click();
    cy.get("@alert").should(
      "have.been.calledWith",
      "Submitted Reflection Point"
    );
  });
});

// ---------- FIRST MONTH TESTS --------

describe("Adding a task to General Tasks", () => {
  it("should add a task to the  General Tasks section", () => {
    cy.visit("localhost:3000/welcome/operations");
    cy.contains(">").click();
    cy.contains(">").click();
    cy.get("#opsFirstMonthAddTaskInputBox").type(
      "New general task to be added"
    );

    cy.get(".opsFirstMonthAddTaskButtonDiv").click();

    cy.get(".generalTasksList").should(
      "contain",
      "New general task to be added"
    );
  });
});

describe("Reflection Points alert is shown on submit", () => {
  it("should show the alert when the submit button is clicked", () => {
    cy.visit("localhost:3000/welcome/operations");

    cy.window().then((win) => {
      cy.spy(win, "alert").as("alert");
    });
    cy.contains(">").click();
    cy.contains(">").click();
    cy.get("#opsFirstMonthAddReflectionPointInputBox").type(
      "New reflection point to be added"
    );
    cy.get(".opsFirstMonthSubmitReflectionButtonDiv").click();
    cy.get("@alert").should(
      "have.been.calledWith",
      "Submitted Reflection Point"
    );
  });
});
