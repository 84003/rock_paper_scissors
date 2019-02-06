const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error')
  }
};

//next

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'scissors';
    case 2:
      return 'paper';
  }
}

//next

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "it was a tie"
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'comp wins';
    } else {
      return 'user wins';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'comp wins';
    } else {
      return 'user wins';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'comp wins';
    } else {
      return 'user wins';
    }
  }
  if (userChoice === 'bomb') {
    return 'user wins';
  }
}

//next

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('computer: ' + computerChoice);
  console.log('user: ' + userChoice);
	console.log(determineWinner(userChoice, computerChoice));

};

playGame();
