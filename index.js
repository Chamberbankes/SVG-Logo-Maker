const fs = require('fs');
const inquirer = require('inquirer');



const questions = {

{
type: "input",
name: "text",
message: "Enter text for the SVG up to three characters",
}

{
type: "input",
name: "text-color",
message: "Enter a text color",
}

{
type: "list",
name: "shape",
message: "Choose a shape for the SVG",
Choices: ["Triangle","Circle", "Square"],
}

{
type: "input",
name: "shape-color",
message: "Enter a color for the shape"
}
};