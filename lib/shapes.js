class Triangle {
constructor(color) {
this.color = color;
}
render() {
return `<polygon points="0,200 300, 200 150, 0" height="100%" width="100%" fill="${this.color}"/>`;
}
}
  
class Circle {
constructor(color) {
this.color = color;
}
render() {
return `<circle r="80" cx="150" cy="100" fill="${this.color}" />`;
}
}
  
class Square {
constructor(color) {
this.color = color;
}
render() {
return `<rect height="200" width="200" x="60" fill="${this.color}" />`;
}
};
  
module.exports = { Triangle, Circle, Square };