const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');


const questions = [
{
type: "input",
name: "text",
message: "Enter text for the SVG up to three characters",
},

{
type: "input",
name: "textColor",
message: "Enter a text color",
},

{
type: "list",
name: "shape",
message: "Choose a shape for the SVG",
choices: ["Triangle", "Circle", "Square"],
},

{
type: "input",
name: "shapeColor",
message: "Enter a color for the shape"
},

];

class SVG{
constructor(){
this.svgshape = '';
this.svgtext = '';
        
}
render(){
return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${this.svgshape}
${this.svgtext}</svg>`; 
}

setSvgText(text, color) {
this.svgtext = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
}
    
setSvgShape(shape){
this.svgshape = shape.render();
}
}

function generateSVG() {
inquirer.prompt(questions).then(answers => {

const svg = new SVG();
svg.setSvgText(answers.text, answers.textColor);

switch (answers.shape) {
case "Triangle":
svg.setSvgShape(new Triangle(answers.shapeColor));
break;

case "Circle":
svg.setSvgShape(new Circle(answers.shapeColor));
break;

case "Square":
svg.setSvgShape(new Square(answers.shapeColor));
break;
default:
console.log("Invalid shape choice");
}

const svgContent = svg.render();
fs.writeFile('logo.svg', svgContent, (err) => {
if (err) {console.error(err);} 

else {console.log('SVG created!');}
});
});
}

generateSVG();