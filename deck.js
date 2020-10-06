const cards = require('./cards.json');
const save = require('./savegame.json');
var fs = require('fs');

var deck = [];
var hand = [];
var act = "not started"

var lindwormDeck = {

  surface: function () {
    // add all cards but spades
    for (i in cards.cards) {
      var card = cards.cards[i]
      if(card.suit != "spades") {
        deck.push(card)
      }
    }
    act = "surface"
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
    act = "descent"
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
    act = "abyss"
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

  save: function(){
    var toJSON = JSON.stringify(deck)
    fs.writeFile('savegame.json', toJSON, 'utf8', function (err) {
      if (err) return console.log(err);
      console.log('game saved');
    });
  },

  load: function(){
    for (i in save) {
      var card = save[i]
      deck.push(card)
    }
    console.log('game loaded');
  },

  shuffle: function (){
    //shuffle the array
    deck = deck.sort(() => Math.random() - 0.5)
  },

  handStatus: function(){
    console.log("There are " + hand.length + " cards in hand.")

    if(hand.length > 0){
      for (i in hand){
        console.log(hand[i].value + " of " + hand[i].suit)
      }
    }
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
