/**
 * Generate random card value and suit
 * 
 * @returns {array} random value and suit 
 */
function randomCards() {

    // Card deck obj with all possible values and suits
    const cardDeck = {
        'value': ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'],
        'suit': ['Diamonds', 'Spades', 'Hearts', 'Clubs']
    };

    // Generate random suits and values
    const randomValueIndex = Math.floor(Math.random() * cardDeck.value.length);
    const randomSuitIndex = Math.floor(Math.random() * cardDeck.suit.length);

    return [cardDeck.value[randomValueIndex], cardDeck.suit[randomSuitIndex]];
}
