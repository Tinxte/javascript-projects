// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
 
  it("key organization has value nonprofit", function() {
    expect(launchcode.organization).toBe("nonprofit");
    });

  it("key executiveDirector has value 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
    });

  it("percentageCoolEmployees has value '100'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
    });

  it("key programsOffered has value Web Development, Data Analysis, Liftoff", function() {
      expect(launchcode.programsOffered).toContain("Web Development");
      expect(launchcode.programsOffered).toContain("Data Analysis");
      expect(launchcode.programsOffered).toContain("Liftoff");
      expect(launchcode.programsOffered.length).toBe(3);
      });

  it("launchOutput returns 'Launch!' when divisible by two", function() {
    let output = launchcode.launchOutput(2)
    expect(output).toBe("Launch!");
    });

  // it("launchOutput returns", function() {
  //   let output = launchOutput(3)
  //   expect(output).toBe("Code!");
  //   });

  // it("launchOutput returns", function() {
  //   let output = launchOutput(5)
  //   expect(output).toBe("Rocks!");
  //   });

});