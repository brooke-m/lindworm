const cards = require('./cards.json');

var deck = [];
var hand = [];

var lindwormDeck = {

  surface: function () {
    // add all cards but spades
    for (i in cards.cards) {
      var card = cards.cards[i]
      if(card.suit != "spades") {
        deck.push(card)
      }
    }
  },

  descent: function () {
    var descentDeck = [];

    // remove hearts 2-10
    for (i in deck) {
      var card = deck[i]
      if(card.suit == 'hearts' && card.face == false) {
      // do nothing
      } else
        descentDeck.push(card)
      }

    //add spades 2-10
    for (i in cards.cards) {
      var card = cards.cards[i]
      if(card.suit == 'spades' && card.face == false) {
        descentDeck.push(card)
      }
    }

    deck = descentDeck
  },

  abyss: function () {
    var abyssDeck = [];

    //remove the last hearts
    for (i in deck) {
      var card = deck[i]
      if(card.suit == 'hearts') {
      // do nothing
      } else
        abyssDeck.push(card)
      }

      //add the spade face cards
      for (i in cards.cards) {
        var card = cards.cards[i]
        if(card.suit == 'spades' && card.face == true) {
          abyssDeck.push(card)
        }
      }

    deck = abyssDeck
  },

  draw: function () {
    //draw three
    var cardOne   = deck.shift()
    var cardTwo   = deck.shift()
    var cardThree = deck.shift()

    //create hand
    hand = [cardOne, cardTwo, cardThree]
  },

  playCard: function (chosenCard) {
    switch(chosenCard) {
      case 'one':
        console.log(hand[0])
        deck.push(hand[1])
        deck.push(hand[2])
        break;
      case 'two':
        console.log(hand[1])
        deck.push(hand[0])
        deck.push(hand[2])
        break;
      case 'three':
        console.log(hand[2])
        deck.push(hand[1])
        deck.push(hand[0])
        break;
      default:
        console.log('can\'t play: expecting \'one\', \'two\', or \'three\'')
    }
  },

  shuffle: function (){
    //shuffle the array
    deck = deck.sort(() => Math.random() - 0.5)
  },

  deckStatus: function (){
    console.log("There are " + deck.length + " cards.")
  },

  deckReset: function(){
    deck = []
    hand = []
  }
}

module.exports = lindwormDeck
 //surface() // always prepare the deck

 // for (i in deck){
 //   console.log(deck[i].value + " of " + deck[i].suit)
 // }
 // console.log(deck.length)
