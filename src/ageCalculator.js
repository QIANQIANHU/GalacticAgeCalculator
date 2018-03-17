
function AgeCalculator(birthday, expectancyLife, secondBirthday) {
  this.birthday = birthday;
  this.expectancyLife = expectancyLife;
  this.secondBirthday = secondBirthday;

  let birthdayToString = this.birthday.toString();
  let birthdayDevided = birthdayToString.split("-");
  let yearOfBirth = parseInt(birthdayDevided[0]);
  let monthOfBirth = parseInt(birthdayDevided[1]);
  let dayOfBirth = parseInt(birthdayDevided[2]);



// }
// AgeCalculator.prototype.checkType = function(){
//   if(){
//     return ("not a triangle");
//   }
};

exports.ageCalculatorModule = AgeCalculator;
