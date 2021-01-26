const Intern = require("../lib/Intern");

describe("Sub classes for Intern", () => {
  describe("Confirm properties of Intern, as well as school and role", () => {
    it("This will set the school of the intern by way of the constructor, and set the role to 'Intern", () => {
      const testSchool = "Columbia";
      const a = new Intern("Foo", 4, "Columbia@gmail.com", testSchool);
      expect(a.school).toEqual("Columbia");
    }); 
  });
  describe("getRole method should return 'Intern'", () =>{
    it ("getRole should return 'Intern'", () => {
    
      const roleValue = "Intern";
      const b = new Intern("Foo", 4, "Columbia@gmail.com", roleValue);
      
      expect(b.getRole()).toEqual("Intern");
  })
  })
})
  // it("should throw an error if not provided a text string value", () => {
      // Arrange
      // const cb = () => new Intern("Foo", 4, "");
      // const err = new Error("Input of 'school' should be a string.");
      // expect(cb).tothrow(err);
      
      //  });  