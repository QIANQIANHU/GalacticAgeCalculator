var AgeCalculator = require('./../src/ageCalculator.js').ageCalculatorModule;

describe('AgeCalculator',function(){
  it('should test whether the users value are taken as date type',function(){
    var ageCalculator = new AgeCalculator(1990-04-05,89,1995-12-17)
    expect(ageCalculator.birthday).toEqual(1990-04-05)


  });
  // it('should correctly determine whether three lengths can be made into a ageCalculator', function(){
  //   var notTriangle = new Triangle(3,8,22)
  //   expect(notTriangle.checkType()).toEqual("not a ageCalculator");
  // });

});
