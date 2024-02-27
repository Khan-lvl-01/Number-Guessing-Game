import inquirer from "inquirer";

async function guessNumber() {
  console.log("You have 3 chances to guess the number\n");

  let number = Math.floor(Math.random() * 100) + 1;
  console.log(`The number is between 1 and 100.`);
  for (let i = 2; i >=0; i--) {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "number",
        message: "Enter a number: ",
      },
    ]);

    let Number = parseInt(answer.number);

    if (Number === number) {
      console.log("Correct!! You win!!");
      return; 
    } else {
      console.log(`Wrong!! You have ${i} chances left.`);
    }
  }

  console.log(`Out of chances! The number was ${number}. You lose.`);
}

guessNumber();