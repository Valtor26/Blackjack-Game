let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let msg = document.getElementById("message-el");
let sumMsg = document.getElementById("sum");
let cardMsg = document.getElementById("cards");

let playerInfo = {
  playerName : "Abhishek",
  chips : 145
};

let playerEl = document.getElementById("player-el");

playerEl.textContent = playerInfo.playerName +": ₹"+playerInfo.chips;

function getRandomCard(){
  let ranCard = Math.floor(Math.random()*13 + 1);
  if(ranCard === 1) return 11;
  else if(ranCard > 10) return 10;
  else return ranCard;
}

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard() ;
  cards = [firstCard,secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame(){
  cardMsg.textContent = "Cards: ";
  for(let i=0;i<cards.length;i++){
      cardMsg.textContent += cards[i]+" ";
  }
  sumMsg.textContent = "Sum: " +sum;
  if(sum === 21){
  message = "You've got a BlackJack";
  hasBlackJack = true;
  }
  else if(sum <= 20){
  message = "Do you want to draw a new card?";
  }
  else{
  message = '\You\'re out of the game!';
  isAlive = false;
  }
msg.textContent = message;
}
 
function newCard(){
  if(isAlive === true && hasBlackJack === false){
    let newTCard = getRandomCard();
    cards.push(newTCard);
    sum += newTCard;
    renderGame();
  }
}

