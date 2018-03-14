export function triangle(sideOne, sideTwo, sideThree) {
  var output = [];

  if ((sideOne + sideTwo > sideThree)||(sideOne + sideThree > sideTwo)||(sideTwo + sideThree > sideOne)) {
    output.push("This is a triangle");    
  } else {
    output.push("This is not a triangle");
  }
  return output;
}
