class Triangle {
constructor(color) {
this.color = color;
}
render() {
return `<polygon points="150, 18 244, 182 56, 182" height="300" width="400" fill="${this.color}"/>`;
}
}
  
class Circle {
constructor(color) {
this.color = color;
}
render() {
return `<circle r="45" cx="50" cy="50" height="100" width="100" fill="${this.color}" />`;
}
}
  
class Square {
constructor(color) {
this.color = color;
}
render() {
return `<rect height="300" width="300" x="60" fill="${this.color}" />`;
}
}
  
module.exports = { Triangle, Circle, Square };