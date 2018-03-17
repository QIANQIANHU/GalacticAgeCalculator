
function AgeCalculator(birthday, expectancyLife, secondBirthday) {
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

  // let today = new Date();
  // let currentYear = today.getFullYear();
  // let currentMonth = today.getMonth()+1;
  // let currentDay = today.getDate();





// }
// AgeCalculator.prototype.checkType = function(){
//   if(){
//     return ("not a triangle");
//   }
};

exports.ageCalculatorModule = AgeCalculator;
