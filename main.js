#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// step 1:
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: chalk.redBright("Enter your first number"),
    },
    {
        type: "number",
        name: "numberTwo",
        message: chalk.redBright("Enter your second number"),
    },
    {
        type: "list",
        name: "operator",
        message: chalk.green("Enter your operator"),
        choices: ["+", "-", "*", "/"],
    },
]);
// step 2
const { numberOne, numberTwo, operator } = answer;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("invalid operator");
        break;
}
console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`));
