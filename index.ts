import inquirer from "inquirer"

let todos = []
let condition = true;

while(condition)
    {
        let todoquestion= await inquirer.prompt(
            [
                {
                    name: "firstQuestion",
                    type: "input",
                    message: "What would you like to add in your todo list?"
                },
                {
                    name: "secondQuestion",
                    type: "confirm",
                    message: "Do you want to add more?",
                    default: "false"
                }
            ]
        );
        todos.push(todoquestion.firstQuestion);
        condition=todoquestion.secondQuestion;
        console.log(todos);
        
    }

