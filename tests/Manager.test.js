const Manager = require("../lib/Manager");

describe("getRole method should return 'Manager'", () =>{
    it ("getRole should return 'Manager'", () => {
    
      const roleValue = "Manager";
      const c = new Manager("Foo", 4, "Columbia@gmail.com", roleValue);
      
      expect(c.getRole()).toEqual("Manager");
  })
  describe("get office number method should return a valid office number", () =>{
    it ("this should return manager's office numnber", () => {
    
      const officeNumber = 123-456-7890;
      const num = new Manager("Foo", 4, "Columbia@gmail.com", officeNumber);
      
      expect(num.officeNumber).toEqual(JSON.parse(123-456-7890));
  })
  })
})