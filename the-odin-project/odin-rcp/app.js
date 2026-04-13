const buttons = document.querySelectorAll('button');
    const resultsDiv = document.getElementById('results');
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        resultsDiv.textContent = result;

        if (result.startsWith('You win!')) {
          playerScore++;
        } else if (result.startsWith('You lose!')) {
          computerScore++;
        }

        if (playerScore === 5) {
          resultsDiv.textContent += '\nCongratulations! You won the game.';
          disableButtons();
        } else if (computerScore === 5) {
          resultsDiv.textContent += '\nOops! You lost the game.';
          disableButtons();
        }
      });
    });

    function getComputerChoice() {
      const choices = ['Rock', 'Paper', 'Scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

    function playRound(playerSelection, computerSelection) {
      playerSelection = playerSelection.toLowerCase();
      computerSelection = computerSelection.toLowerCase();

      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
      ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
      } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
      }
    }

    function disableButtons() {
      buttons.forEach(button => {
        button.disabled = true;
      });
    }