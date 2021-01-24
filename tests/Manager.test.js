const Manager = require("../lib/Manager");

describe("getRole method should return 'Manager'", () =>{
    it ("getRole should return 'Manager'", () => {
    
      const roleValue = "Manager";
      const c = new Manager("Foo", 4, "Columbia@gmail.com", roleValue);
      
      expect(c.getRole()).toEqual("Manager");
  })
  })