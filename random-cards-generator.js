const btn = document.querySelector('#btn');
var para = document.querySelector('p');

// card suit only
// function randomCards() {
//   let currentCard = 'Heart';
//   const cards = ['Diamond', 'Spade', 'Heart', 'Club'];
//   const randomNumber = Math.floor(Math.random() * 4);
//   currentCard = cards[randomNumber];
//   para.innerHTML = currentCard;
// }

function randomCards() {
  /* define all card suits and values in 2 arrays */
  const suit = ['Diamonds', 'Spades', 'Hearts', 'Clubs'];
  const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];

  /* pick random suit and value from the arrays */
  const randomSuit = Math.floor(Math.random() * suit.length);
  const randomCard = Math.floor(Math.random() * cardValue.length);

  /* output results */
  const currentCard = cardValue[randomCard] + ' Of ' + suit[randomSuit];
  para.innerHTML = currentCard;
}

btn.addEventListener("click", randomCards);
