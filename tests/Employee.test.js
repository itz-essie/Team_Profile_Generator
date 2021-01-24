const Employee = require("../lib/Employee");

describe('Classes for Employee', () => {
  describe('Confirm properties of name, id, and email', () => {
    it("This will set the name, id, and email values to the user's input", () => {
      const testEmployee = ("Esiena", 6, "eekwofia@gmail.com");
      const obj = new Employee(testEmployee)
      expect(testEmployee.name).toEqual("Esiena");
      expect(testEmployee.id).toEqual(6);
      expect(testEmployee.email).toEqual("eekwofia@gmail.com");
    });

    // it("should throw an error if not provided a 'text' value", () => {
    //   // Arrange
    //   const cb = () => new Employee();
    //   expect(cb).toThrowError();
    //    });   
  })
})