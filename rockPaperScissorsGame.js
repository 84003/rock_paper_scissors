const getPlayerChoice = (playerInput) => {
  playerInput = playerInput.toLowerCase();
  if (
    playerInput === "rock" ||
    playerInput === "paper" ||
    playerInput === "scissors" ||
    playerInput === "bomb"

  ) {
    return playerInput;
  } else {
    console.log("Error. Please choose: rock, paper, or scissors");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const winnerLoserOrTie = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }
  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer is the winner!";
    } else {
      return "You are the winner!";
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer is the winner!";
    } else {
      return "You are the winner!";
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer is the winner!";
    } else {
      return "You are the winner!";
    }
  }
  if (playerChoice === 'bomb'){
    return "You are the winner!";
  }
};

const play = () => {
  const playerChoice = getPlayerChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(`You chose ${playerChoice}.`);
  console.log(`The computer chose ${computerChoice}.`);
  console.log(winnerLoserOrTie(playerChoice, computerChoice));
};

play();
