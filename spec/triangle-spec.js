var Triangle = require('./../src/triangle.js').triangleModule;

describe('Triangle',function(){
  it('should test whether a Triangle has three sides',function(){
    var triangle = new Triangle(3,4,5)
    expect(triangle.sideOne).toEqual(3)
    expect(triangle.sideTwo).toEqual(4)
    expect(triangle.sideThree).not.toEqual(6)
  });
  it('should correctly determine whether three lengths can be made into a triangle', function(){
    var notTriangle = new Triangle(3,8,22)
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

});
