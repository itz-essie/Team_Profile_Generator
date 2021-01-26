const Employee = require("../lib/Employee");

describe('Classes for Employee', () => {
  describe('Confirm properties of name, id, and email', () => {
    it("This will set the name, id, and email values to the user's input", () => {
      const testEmployee = new Employee ("Esiena", 6, "eekwofia@gmail.com");
      expect(testEmployee.name).toEqual("Esiena");
      expect(testEmployee.id).toEqual(6);
      expect(testEmployee.email).toEqual("eekwofia@gmail.com");
      expect(testEmployee.getRole()).toEqual("Employee");
    });

    // it("should throw an error if not provided a 'text' value", () => {
    //   // Arrange
    //   const cb = () => new Employee();
    //   expect(cb).toThrowError();
    //    });   
  })
})

it("should throw an error if not provided with valid inputs", () => {
  // Arrange

  const cb = new Employee("", "", "");
  expect(() => {
    if (cb.getName() === "" && cb.getId() === "" && cb.getEmail() === "")
      throw new Error("please enter valid inputs, cannot leave blank.");
  }).toThrow("please enter valid inputs, cannot leave blank.");
});

