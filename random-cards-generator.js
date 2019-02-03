
/*
* card suit randomly generated
*/
// function randomCards1() {
//   let currentCard = 'Heart';
//   const cards = ['Diamond', 'Spade', 'Heart', 'Club'];
//   const randomNumber = Math.floor(Math.random() * 4);
//   currentCard = cards[randomNumber];
//   return currentCard;
// }

/*
* card values and suits randomly generated
*/
function randomCards2() {

  // card deck obj with all possible suits and values
  const cardDeck = {
    'suit': ['Diamonds', 'Spades', 'Hearts', 'Clubs'],
    'value': [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A']
  };

  // generate random suits and values
  const randomSuit = Math.floor(Math.random() * cardDeck.suit.length);
  const randomCard = Math.floor(Math.random() * cardDeck.value.length);

  return currentCard = cardDeck.value[randomCard] + ' Of ' + cardDeck.suit[randomSuit];
}

