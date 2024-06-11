import inquirer from "inquirer";
let userAns = await inquirer.prompt([
    {
        type: "string",
        name: "words",
        message: "Enter your sentence"
    }
]);
let wordCount = userAns.words.trim().split(" ");
console.log(wordCount);
console.log(wordCount.length);
