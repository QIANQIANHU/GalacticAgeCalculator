
function Triangle(sideOne, sideTwo, sideThree) {
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;

}
Triangle.prototype.checkType = function(){
  if( (this.sideOne > (this.sideTwo + this.sideThree)) || (this.sideTwo > (this.sideOne + this.sideThree)) || (this.sideThree > (this.sideOne + this.sideTwo)) ){
    return ("not a triangle");
  }
};

exports.triangleModule = Triangle;
