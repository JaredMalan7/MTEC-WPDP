function randomWords() {
    let words = ['stuff', 'sugar', 'sweet', 'happy', 'money', 'cat', 'make'];
    let index = Math.floor(Math.random() * words.length);
    return words[index];
  }
  
  //Random word selected
  let theWord = randomWords();
  
  //click run a few times to see this in action then delete this line of code.
  //console.log(theWord);
  
  //Write your code here.
  
  //this is a loop that loops as many times as there are letters in the word. Inside this loop push an underscore to an array that you have decided will be the game board.
  
  let gameBoard = board(theWord);
  let tries = 3;
  let wrongGuess = [];
  let letter = "";
  while (tries > 0) {
    //Alert statements that show the user what is in the game board, tries left and wrong guesses. I used the join method to git rid of the `,` between each `_` of the the gameBoard and wronGuess elements.
    alert(`Gameboard: ${gameBoard.join(" ")}`);
    alert(`Tries left: ${tries}`);
    alert(`wrong letters guessed: ${wrongGuess} `);
    // input is a variable that gets the user to insert a letter and stores it inside the variable input
    let input = prompt("Guess a letter ");
    // letter converts the input into lowercase and stores it into a new variable called letter which is later used in the game
    // the idea is to no prevent the user from getting an error for using a capital letter that would be equivalent.
    let letter = input.toLowerCase();
    alert("-----------------------------------------")
    alert("");
    alert("");
    let guessResult = guess(letter, theWord, tries, gameBoard, wrongGuess);
    gameBoard = guessResult[0];
    tries = guessResult[1];
    wrongGuess = guessResult[2];
    //console.log(guessResult);
    
    //if the game board array does not have any more "_" and they have been replaced by the input letters, the user wins.
    if(!gameBoard.includes("_")) { 
      alert(`You Win! The word was "${theWord}"`);
      //if you win the game the program ends
      break;
    }
    // if the number of tries is 0, the user loses and it's game over.
    if(tries === 0) {
      alert(`You Lose! The word was "${theWord}"`);
      //if you lose the game the program ends
      break;
    }
  }
  
  
  function guess(letter_, theWord_, tries_, gameBoard_, wrongGuess_) {
    let guess = false;
    for (let i = 0; i < theWord.length; i++) {
      if (letter_ == theWord_[i]) {
        gameBoard_[i] = letter_;
        guess = true;
        alert("That is correct!")
      }
      
    }
    if (guess === false){
      //wrongGuess_.push(letter_);
      tries_ -= 1;
    if(!wrongGuess_.includes(letter_)) { 
      wrongGuess_.push( letter_); 
      alert("Sorry try again!")
    }
    }
    //tries = (guess == false) ?  (tries - 1) : tries_;
    return [gameBoard_, tries_, wrongGuess_];
  }
  
  function board(theWord) {
    let gameBoard = [];
    for (let i = 0; i < theWord.length; i++) {
      gameBoard.push("_");
    }
    return gameBoard;
  }
  
  
  
  
  //console.log (gameBoard);
  
  