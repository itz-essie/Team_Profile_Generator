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
})