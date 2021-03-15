function playGame (playerInput) {
    clearMessages();

function getMoveName(argMoveId){
    if(argMoveId == 1){
        console.log('move:', argMoveId);
      return 'kamień';
    } else if(getMoveId == 2){
        console.log('move:', argMoveId);
        return 'papier';
    } else if(getMoveId == 3){
        console.log('move:', argMoveId);
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      console.log('move:', argMoveId);
      return 'nieznany ruch';
    }
  }
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Computer wygrał tym razem!');
      }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Computer wygrał tym razem!');
      }
      else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      }
    
      else if( (argComputerMove == 'papier' && argPlayerMove == 'papier') || 
      (argComputerMove == 'kamień' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')){
        printMessage('Remis!');
      }
    
      else if( argPlayerMove == 'ruch nieznany'){
        printMessage(' Twój ruch jest poza zakresem');
      }
  }

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput)

printMessage('Twój ruch to: ' + playerMove);

displayResult(ComputerMove, PlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    //printMessage('Wybrałeś kamień');
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    //printMessage('Wybrałeś paiper');
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    //printMessage('Wybrałeś nożyce');
    playGame(3);
  });