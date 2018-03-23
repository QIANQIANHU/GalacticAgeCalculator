export class AgeCalculator {
  constructor(birthday, expectancyLife, secondBirthday){
  this.birthday = birthday;
  this.expectancyLife = expectancyLife;
  this.secondBirthday = secondBirthday;

  let birthdayOfInput = new Date(birthday);
  let yearOfBirth = birthdayOfInput.getFullYear();
  let monthOfBirth = birthdayOfInput.getMonth() + 1;
  let dayOfBirth = birthdayOfInput.getDate() + 1;
  this.yearOfBirth = yearOfBirth;
  this.monthOfBirth = monthOfBirth;
  this.dayOfBirth = dayOfBirth;

  let secondbirthdayOfInput = new Date(secondBirthday);
  let secondYearOfBirth = secondbirthdayOfInput.getFullYear();
  let secondMonthOfBirth = secondbirthdayOfInput.getMonth() + 1;
  let secondDayOfBirth = secondbirthdayOfInput.getDate() + 1;
  this.secondYearOfBirth = secondYearOfBirth;
  this.secondMonthOfBirth = secondMonthOfBirth;
  this.secondDayOfBirth = secondDayOfBirth;

  let today = new Date();
  this.currentYear = today.getFullYear();
  this.currentMonth = today.getMonth() + 1;
  this.currentDay = today.getDate() + 1 ;

  this.ageInYears = (this.currentYear - this.yearOfBirth);

  this.ageInSeconds = (this.currentYear - this.yearOfBirth) * 31536000 + (this.currentMonth - this.monthOfBirth) * 2592000 + (this.currentDay - this.dayOfBirth ) * 86400;

  this.secondAgeInSeconds = (this.currentYear - this.secondYearOfBirth) * 31536000 + (this.currentMonth - this.secondMonthOfBirth) * 2592000 + (this.currentDay - this.secondDayOfBirth ) * 86400;
}

earthAgeChecker(){
if (this.ageInYears >= 0) {
  console.log(this.ageInYears);
    return `You are ${this.ageInYears} years old on earth and count in seconds your age`;
    // is as ${this.ageInSeconds} seconds.
  } else {
    return `Please enter your real birthday.`;
  }
};

// AgeCalculator.prototype.diffOfPartnersChecker = function(){
// this.diffOfPartners = Math.abs(this.ageInSeconds-this.secondAgeInSeconds);
// if (this.secondBirthday !== '') {
//    return `You and your partner are ${this.diffOfPartners} seconds different.`
//  } else {
//    return `Would you like to check the seconds-difference with your partner next time?`
//  }
// };

// AgeCalculator.prototype.planetAgeChecker = function(){
// if (this.ageInSeconds >= 0) {
//    return `Your Mercury age is ${Math.round(this.ageInSeconds/0.24/31536000)} years, the Venus age is  ${Math.round(this.ageInSeconds/0.62/31536000)} years, the Mars age is  ${Math.round(this.ageInSeconds/1.88/31536000)} years and the Jupiter  age is  ${Math.round(this.ageInSeconds/11.86/31536000)} years.`;
//  } else {
//    return `Would you like to check your age on other planet next time?`;
//  }
// };

// AgeCalculator.prototype.expectancyLifeChecker = function(){
//   if (this.expectancyLife <= 0){
//     return`Be positive, life is wonderful, give it a chance!`;
//   }
//
//   if (this.expectancyLife > 120) {
//     return`You are so positive, life is wonderful, but check your expectation of life, I mean on earth......`;
//   }
//
//   if (this.expectancyLife <= (this.ageInYears + 10)) {
//     return`Enjoy your life, you are doing so good! Try to explore more in the world!`;
//   }
//
//   if (this.expectancyLife > (this.ageInYears + 10))
//   {
//    return `Your have ${this.expectancyLife - this.ageInYears} years left on the world, keep your healthy living style!`;
//  } else {
//    return `Would you like to check your age on other planet next time?`;
//  }
// };

};
// exports.ageCalculatorModule = AgeCalculator;
