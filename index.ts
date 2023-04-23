#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import {sum , sub, multiple,division,remainder} from "./app.js";
const welcome =async () => {
    console.log(chalk.blueBright(figlet.textSync('calculator')));
    console.log(chalk.bgBlueBright("AUTHOR: Madeeha"),"PANIC-Batch43 (Q1)");
    let option = "";
    do{
    const input = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message:chalk.redBright("Enter first number : "),
    },
    {
        type: "number",
        name: "num2",
        message:chalk.redBright("Enter second number : "),
    },
    {
        type: "list",
        name: "operation",
        message:"select operation",
        choices:["+","-","*","/","%"],
    }
]);
if(input.operation === "+")
{
    const result = sum(input.num1 , input.num2);
    console.log(chalk.yellow(`sum : ${result}`));
}
else if(input.operation === "-")
{
    const result = sub(input.num1 , input.num2);
    console.log(chalk.yellow(`subtraction : ${result}`));
}
else if(input.operation === "*")
{
    const result = multiple(input.num1 , input.num2);
    console.log(chalk.yellow(`multiplication : ${result}`));
}
else if(input.operation === "/")
{
    const result = division(input.num1 , input.num2);
    console.log(chalk.yellow(`division : ${result}`));
}
else if(input.operation === "%")
{
    const result = remainder(input.num1 , input.num2);
    console.log(chalk.yellow(`remainder : ${result}`));
}
else 
{
    console.log(chalk.yellow("invalid operation"));
}
const choice = await inquirer.prompt([{
    type: "string",
    name: "option",
    message:chalk.cyan( "for further operation press y \nfor terminating press n "),
    default: "",
}])
if(choice.option === "y")
{
    option = "y";
}
else
{
    option= "n";
}
}
while(option === "y")
};
await welcome();