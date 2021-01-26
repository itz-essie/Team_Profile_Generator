const Engineer = require("../lib/Engineer");

describe('Engineer Sub Class', () => {
    describe('Confirmation of Engineer Properties/gitHub', () => {
      it("This will confirm that a valid gitHub user was inputted", () => {
        // Arrange
        const gitHubTest = 'itz-essie';
        // Act
        const obj = new Engineer ("Foo","Engineer@gmail.com",6, gitHubTest);
        // Assert
        expect(obj.getGithub()).toEqual("itz-essie");
      })
    })
    describe("getRole method should return 'Engineer'", () =>{
      it ("getRole should return 'Engineer'", () => {
      
        const roleValue = "Engineer";
        const e = new Engineer("Foo", 4, "Columbia@gmail.com", roleValue);
        
        expect(e.getRole()).toEqual("Engineer");
    });
    });
    
  });

  it("should throw an error if not provided a text string value", () => {
    // Arrange
  
    const cb = new Engineer("Foo", 4, "Columbia@gmail.com", "");
    expect(() => {
      if (cb.github === "")
        throw new Error("input of 'github' should be a string.");
    }).toThrow("input of 'github' should be a string.");
  });