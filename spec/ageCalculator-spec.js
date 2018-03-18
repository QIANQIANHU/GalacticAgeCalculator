var AgeCalculator = require('./../src/ageCalculator.js').ageCalculatorModule;

describe('AgeCalculator',function(){
  it('should test whether the users value are taken by the ageCalculator Object',function(){
    var ageCalculator = new AgeCalculator("1990-04-05", "89","1995-12-17")
    expect(ageCalculator.birthday).toEqual("1990-04-05");
    expect(ageCalculator.expectancyLife).toEqual("89");
    expect(ageCalculator.secondBirthday).toEqual("1995-12-17");
    expect(ageCalculator.yearOfBirth).toEqual(1990);
    expect(ageCalculator.monthOfBirth).toEqual(4);
    expect(ageCalculator.dayOfBirth).toEqual(5);
    expect(ageCalculator.ageInYears).toEqual(28);
  });
  // it('should correctly display users age by input the birthday in ageCalculator', function(){
  //   var ageInYears = new AgeCalculator("1990-04-05", "89","1995-12-17")
  //   expect(ageCalculator.ageInYears).toEqual(28);
  // });

});
