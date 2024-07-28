const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () =>{
test('if the shape was created with the correct color', () =>{
const shape = new Triangle('blue');
expect(shape.render()).toEqual('<polygon points="0,200 300, 200 150, 0" height="100%" width="100%" fill="blue"/>');
});
});


describe('Circle', () =>{
test('if the shape was created with the correct color', () =>{
const shape = new Circle('gold');
expect(shape.render()).toEqual('<circle r="80" cx="150" cy="100" fill="gold" />');
});
});


describe('Square', () =>{
test('if the shape was created with the correct color', () =>{
const shape = new Square('orange');
expect(shape.render()).toEqual('<rect height="200" width="200" x="60" fill="orange" />');
});
});