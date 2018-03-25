// var AgeCalculator = require('./../src/ageCalculator.js').ageCalculatorModule;
import { AgeCalculator } from './../src/ageCalculator.js';

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

  it('should ask user to input real birthday if the birthday is after today', function(){
    var ageOnEarth = new AgeCalculator("2111-04-05", "89","1995-12-17")
    expect(ageOnEarth.earthAgeChecker()).toEqual("Please enter your real birthday.");
  });

  it('should give user age in earth years and seconds if the input birthday is real', function(){
    var ageOnEarth = new AgeCalculator("2011-04-05", "89","1995-12-17")
    var today = new Date('December 17, 2018 00:00:00')//set fixed value to test
    expect(ageOnEarth.earthAgeChecker()).toEqual("You are 7 years old on earth and count in seconds your age is as 219974400 seconds.");
  });

  it('should give user a suggestion if the users birthday input is after today', function(){
    var ageOnEarth = new AgeCalculator("2111-04-05", "89","1995-12-17")
    expect(ageOnEarth.planetAgeChecker()).toEqual("Would you like to check your age on other planet next time?");
  });

  it('should give user age in Mercury years, Venus years, Mars years and Jupiter years if the input birthday is real', function(){
    var ageOnEarth = new AgeCalculator("2011-04-05", "89","1995-12-17")
    var today = new Date('December 17, 2018 00:00:00')//set fixed value to test
    expect(ageOnEarth.planetAgeChecker()).toEqual("Your Mercury age are 29 years, the Venus age are 11 years, the Mars age are 4 years and the Jupiter age are 1 years.");
  });

});
