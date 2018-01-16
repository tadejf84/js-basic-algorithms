var btn = document.querySelector('#btn');
var para = document.querySelector('p');

// card suit only
// function randomCards() {
//
//   var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
//   var currentCard = 'Heart';
//
//   var randomNumber = Math.floor(Math.random() * 4);
//
//   currentCard = cards[randomNumber];
//
//   para.innerHTML = currentCard;
//
// }

function randomCards() {

  var suit = ['Diamonds', 'Spades', 'Hearts', 'Clubs'];
  var card = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];

  var randomSuit = Math.floor(Math.random() * suit.length);
  var randomCard = Math.floor(Math.random() * card.length);

  var currentCard = card[randomCard] + ' Of ' + suit[randomSuit];

  para.innerHTML = currentCard;

}

//btn.addEventListener("click", randomCards);
