#! /usr/bin/env node

import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: "kindly Enter your Id: " 
  },
  {
    type: "number",
    name: "userpin",
    message: "kindly Enter your Pin:  ",
  },
  {
    type: "list",
    name: "accounttype",
    choices: ["current", "saving"],
    message: "Select Your Account Type: ",
  },
  {
    type: "list",
    name: " transactionType",
    choices: ["Fast Cash", "Withdraw"],
    message: "Select Your Account Type: ",
    when(answers) {
      return answers.accounttype;
    },
  },
  {
    type: "list",
    name: " amount",
    choices: [1000, 2000, 5000, 10000, 20000, 50000],
    message: "Select Your Amount: ",
    when(answers) {
      return answers.transactionType == "Fast Cash";
    },
  },
  {
    type: "number",
    name: " amount",
    message: "Enter Your Amount: ",
    when(answers) {
      return answers.transactionType == "Withdraw";
    },
  },
])

if(answers.userId && answers.userpin) {
    const balance = 50000;
    console.log("Previuos Balance" , balance);
    const enteredAmount = answers.amount;
    if(balance >= enteredAmount) {
        const remaining = balance - enteredAmount;
        console.log("your Remaining Balance is: ", remaining)
    } else{
        console.log("insufficent Balance");
    }
}

     