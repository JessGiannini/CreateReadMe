// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMark = require("./utils/generateMarkdown.js"); //CHECK THIS
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    //# user input project title
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
  },
  {
    //title ## Description \n\n user input describtion
    type: "input",
    message: "How would you describe your project?",
    name: "projectInfo",
  },
  {
    //in description add [Live Link](user input project link)
    type: "input",
    message: "What is your link for the deployed application?",
    name: "projectLink",
  },
  {
    // create a while true function to then create id tags for table of contents
    type: "confirm",
    message: "Would you like to include a table of contents?",
    name: "table",
  },
  {
    // title ## Installation \n\n user input step by step description
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  {
    //title ## Usage \n\n user input instructions and example for use
    type: "input",
    message: "Please, provide instructions and examples for use.",
    name: "usage",
  },
  {
    //inside usage add screenshot
    type: "input",
    message: "Please, add a screenshot with a copy of the relative path.",
    name: "screenshot",
  },
  {
    //title ## Credits\n\n user input
    type: "input",
    message: "Who did you work with on this project?",
    name: "credits",
  },
  {
    //inside credits add github link
    type: "input",
    message: "What is your Git Hub user name?",
    name: "github",
  },
  {
    //title ## License\n\n with checked license, badge, and url
    type: "checkbox", //license question
    message:
      "Which license did you use to create this project? Please, selct only one.",
    name: "license",
    choices: ["MIT", "BSD", "GPL", "Apache"],
  },
  {
    //title ## Features\n\n user input list of features
    type: "input",
    message: "What features does your project include?",
    name: "features",
  },
  {
    //title ## Contributing\n\n with how to contribute to this project
    type: "input",
    message: "How would you like other to contribute to your project?",
    name: "contributing",
  },
  {
    // title ## Tests\n\n with user input of a description
    type: "input",
    message:
      "Please, provide a description of any tests you have writen for this application?",
    name: "tests",
  },
  {
    // title ## Questions\n\n with user input of a description
    type: "input",
    message: "Please, let me know if you have any questions.",
    name: "questions",
  },
];

//REWRITE SECTION BELOW
function promptUser() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile("README.md", answers));
}
// console.log("This is inquire", promptUser);
//   .then((data) => {
//     console.log(data);
//     const fileName = `${data.name.toLowerCase().split(" ").join("")}.json`;

//     fs.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) =>
//       err ? console.log(err) : console.log("Success!")
//     );
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  let text = generateMarkdown(answers);

  fs.writeFile(fileName, text, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();

// fs.readFile("data.csv", "utf8", (error, data) => {
//   error ? console.error(error) : console.log(data);
//   const dataArr = data.split(",");
//   // console.log(dataArr);
//   for (let i = 0; i < dataArr.length; i++) {
//     console.log(dataArr[i]);
//   }
