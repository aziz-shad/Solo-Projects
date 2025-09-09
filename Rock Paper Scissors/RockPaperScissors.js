const arg = process.argv.slice(2);

// # Check if input array is empty
if (arg.length === 0) {
  console.error("Please provide your move to play..");
  console.log(
    "Example : Node RockPaperScissors.js [Your move like stone, paper or scissors]"
  );
  return;
}

// # check to see either give only one option
if (arg.length > 1) {
  console.log("Please give one move at a time form (stone, paper, scissors).");
  return;
}

// # check to see if that option is other then the required option
// if (arg[0] !== "stone" || arg[0] !== "paper" || arg[0] !== "scissors") {
//   console.log("You can only select form (stone, paper, scissors) option.");
//   return;
// }

// # function which actully play the gave, user input come from CLI, and computer move come from pickComputerMove function
const play = () => {
  const computerMove = pickComputerMove();
  let result = "";
  if (computerMove === arg[0]) result = "Tie.";
  else if (computerMove === "paper" && arg[0] === "stone") {
    result = "You lose.";
  } else if (computerMove === "scissors" && arg[0] === "stone") {
    result = "You win.";
  } else if (computerMove === "stone" && arg[0] === "paper") {
    result = "You win.";
  } else if (computerMove === "scissors" && arg[0] === "paper") {
    result = "You lose.";
  } else if (computerMove === "stone" && arg[0] === "scissors") {
    result = "You lose.";
  } else if (computerMove === "paper" && arg[0] === "scissors") {
    result = "You win.";
  }

  console.log("You selected : ", arg[0]);
  console.log("Computer selected : ", computerMove);
  console.log("Result : ", result);
};

// # Function to randomly select computer move
const pickComputerMove = function () {
  let computerChoice = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "stone";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = "scissors";
  }

  return computerChoice;
};

// # calling play function to play a game.
play();
