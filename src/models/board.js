import Card from "./card";

export default class Board {
  constructor(title, id) {
    this.id = id;
    this.cards = [];
    this.title = title;
  }

  /*
      Will add card object to this board
    */
  addCard(cardToAdd) {
    this.cards = [...this.cards, cardToAdd];
  }

  setCardComment(newComment, cardId) {
    // Checks that the board got a card array
    if (this.cards) {
      const cardIndex = this.cards.findIndex((card) => {
        return card.id === cardId;
      });
      // Checks that the card was found
      if (cardIndex !== -1) {
        this.cards[cardIndex].setComment(newComment);
      }
    }
  }

  setCardLeftSentence(newSentence, cardId) {
    // Checks that the board got a card array
    if (this.cards) {
      const cardIndex = this.cards.findIndex((card) => {
        return card.id === cardId;
      });
      // Checks that the card was found
      if (cardIndex !== -1) {
        this.cards[cardIndex].setLeftSentence(newSentence);
      }
    }
  }

  setCardRightSentence(newSentence, cardId) {
    // Checks that the board got a card array
    if (this.cards) {
      const cardIndex = this.cards.findIndex((card) => {
        return card.id === cardId;
      });
      // Checks that the card was found
      if (cardIndex !== -1) {
        this.cards[cardIndex].setRightSentence(newSentence);
      }
    }
  }

  setCardNewTag(newTag, cardId) {
        // Checks that the board got a card array
        if (this.cards) {
          const cardIndex = this.cards.findIndex((card) => {
            return card.id === cardId;
          });
          // Checks that the card was found
          if (cardIndex !== -1) {
            this.cards[cardIndex].setNewTag(newTag);
          }
        }
  }

  filterCards(bankIsFiltered, tags) {
    // If bankIsFiltered is false use showCard() on all cards to display them else call filterOnTags(tags)
    for (var i = 0; i < this.cards.length; i++) {
      if (!bankIsFiltered) {
        this.cards[i].showCard();
      } else {
        this.cards[i].filterOnTags(tags);
      }
    }
  }
}
