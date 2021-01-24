const Intern = require("../lib/Intern");

describe("Sub classes for Intern", () => {
  describe("Confirm properties of Intern School/Properties", () => {
    it("This will set the school of the intern by way of the constructor", () => {
      const testSchool = "Columbia";
      const a = new Intern("Foo", 4, "Columbia@gmail.com", testSchool);

      expect(a.school).toEqual("Columbia");
    });

    // it("should throw an error if not provided a text string value", () => {
    //   // Arrange
    //   const cb = () => new Intern("Foo", 4, "");
    //   const err = new Error("Input of 'school' should be a string.");
    //   expect(cb).tothrow(err);
      
    //    });   
  });
  describe("getRole method should return 'Intern'", () =>{
    it ("getRole should return 'Intern'", () => {
    
      const roleValue = "Intern";
      const b = new Intern("Foo", 4, "Columbia@gmail.com", roleValue);
      
      expect(b.getRole()).toEqual("Intern");
  })
  })
})