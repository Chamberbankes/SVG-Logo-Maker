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
