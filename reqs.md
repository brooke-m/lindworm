# Lindworm Bot:

i just feel like the lindworm would be even spookier in bot form

## Responsibilities in Discord
 - communicate privately with channeler (listening)
 - post cards into a public channel
 - post cards into a private channel
 - facilitate changing of the acts
   - store rules and directions somewhere on the bot

### Discord Commands
 - setup: setup the game
 - invite: draw three and display the hand privately
 - play: recieve choice and display card publically
 - (hidden) construct an embed
 - update: recieve notification of acts changing
  - restructure the deck as necessary
  - post an act update

### Necessary Embeds
  - card draw (private)
    - needs to know the cards drawn
    - needs to be sent lindwormDeck.hand
  - card play (public)
  - act shift (public)

## Deck Responsibilities
  - be saved at any moment
  - manage the deck of cards
    - change the structure of the deck to match the current act
      - remove groups of cards (suits, face cards)
      - add groups of cards (suits, face cards)
    - maintain ordering of the deck until it needs to be shuffled
  - manage card draw and decisions
    - offer three cards to the channeler
    - 'play' one card, place the others at the bottom of the deck
    - MAYBE offer 'positions' to place the card
  - NOT keeping track of cards that have been played

### States of the Deck
  - Oneshot: remove all spades
  - The Surface (Act I): remove all spades
  - The Descent (Act II): remove non-face hearts cards, add all non-face spade cards
  - The Abyss (Act III): remove all hearts, add final spades

### Cards
  - suit: string
  - value: string
  - face: boolean
  - result: string
  - description: string (nullable)
  - action: string (nullable)

  "face": false,
  "result": "",
  "description": "",
  "action": null
