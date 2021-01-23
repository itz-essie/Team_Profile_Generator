const Intern = require("../lib/Intern");


describe('getSchool', () => {
    describe("Initialization", () => {
it ("This will set the school of the intern via the constructor", () => {
    const testSchool = "Columbia";
    const a = new School("Foo", 64, "Columbia@gmail.com", testSchool);
    expect(a.school).toBe(testSchool);
    console.log(a.school)
})
})


it("should throw an error if not provided a 'text' value", () => {
    // Arrange
    const cb = () => new getSchool();
    const err = new Error(
      "Expected parameter 'text' to be a non empty string"
    );

    // Assert
    expect(cb).toThrowError(err);
 })

  });
