export function triangle(sideOne, sideTwo, sideThree) {
  var output = [];
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;

  if ((sideOne + sideTwo > sideThree)||(sideOne + sideThree > sideTwo)||(sideTwo + sideThree > sideOne)) {
    output.push("This is a triangle");
  } else {
    output.push("This is not a triangle")
  }
}
