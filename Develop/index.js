// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const generateMarkdown=require('./utils/generateMarkdown')
const util=require('util');
const fs =require('fs');
const writeFileAsync=util.promisify(fs.writeFile);


  const questions=[
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'title',
      message: 'Please give a title to your project',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please provide a valid project title.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your Github username.',
      validate: githubInput => {
        if(githubInput) {
          return true;
        } else {
          console.log('Please enter your Github username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'repository',
      message: 'Enter the name of your repository.',
      validate: repoInput => {
        if (repoInput) {
          return true;
        } else {
          console.log('Please provide the name of your repository.');
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description about your application.',
      validate: desInput => {
        if (desInput) {
          return true;
        } else {
          console.log('Enter information about your application.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the steps required to install and have your application running.',
      validate: instInput => {
        if (instInput) {
          return true;
        } else { 
          console.log('Enter the steps needed to have your application running.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter instructions on how to use your application, Provide any screenshots as needed.',
      validate: useInput => {
        if (useInput) {
          return true;
        } else {
          console.log('Please add the instructions on how to use your application.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'credit',
      message: 'List any collaborators, if there were any, and provide links to their Github profiles. If any third-party assests were used, please link to their creators. Link to any tutorials used as well.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please provide license information.',
      choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC', 'WordPress'],
      default:0,
      validate: licInput => {
        if (licInput) {
          return true;
        } else {
          console.log('Please select an option provided.');
          return false;
        }
      }
    },
    {
      type:'checkbox',
      name:'built with',
      message: 'Select the technologies used to build your application.',
      choices: ['HTML', 'CSS','JavaScript','Node.js','AJAX','jQuery'],
      default: 0,
      validate: builtInput => {
        if(builtInput) {
          return true;
        } else {
          console.log('Please select an option provided');
          return false;
        }
      }
    }
  ]
  // .then((answers) => {
  //   // Use user feedback for... whatever!!
  //   console.log(answers)
  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //     console.error(error);
  //   } else {
  //     // Something else went wrong
  //     console.log('Something went wrong.')
  //   }
  // });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./dist/${fileName}",data, err => {
    if (err) {
      throw err
    };
    console.log('README created!')
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init()
  .then(answers => generateMarkdown(answers))
  .then(generatedReadme => writeToFile('README.md', generatedReadme))
  .catch(err => {
    console.log(err);
  });

// async function init() {
//   try {
//     // Ask user questions and generate responses
//     const answers =await promptQuestions();
//     const generateBody=generateMarkdown(answers);
//     //Write README to dis directory
//     await writeFileAsync("./dist/README.md", generateBody);
//     console.log('Successfully wrote to README.md');
//   } catch(err) {
//     console.log(err);
//   }
// }
// init();