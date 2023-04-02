const inquirer = require('inquirer');
const fs = require('fs');



const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
    {
        type: 'input',
        message: 'what is text?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'what is text color?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Which shape would you like to choose?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: 'What is the shape color?',
        name: 'shapeColor',
    },
];




function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log("Something wrong happened!")
        } else {
            console.log("SVG file successfully generated!")
        }
    })
}


function init() {

    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            let shape;

            if(answers.shape == "Circle") {
                shape = new Circle(answers.text, answers.textColor, answers.shapeColor)
            }

            if(answers.shape == "Triangle") {
                shape = new Triangle(answers.text, answers.textColor, answers.shapeColor)
            }
            if(answers.shape == "Square") {
                shape = new Square(answers.text, answers.textColor, answers.shapeColor)
            }

            

           

            writeToFile("logo.svg", shape.render());
        })
}


init();