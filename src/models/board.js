import Card from "./card";

export default class Board {
    constructor(title, id) {
        this.id = id;
        this.cards = [new Card(0, "", "Hej världen!", "Hello world!", "Greeting")];
        this.title = title;
    }
  
    /*
      Will add card object to this board
    */
    addCard(cardToAdd) {
      this.cards = [...this.cards, cardToAdd];
    }
  
    filterCards(bankIsFiltered, tags) {
      console.log("bankIsFiltered:", bankIsFiltered);
      // If bankIsFiltered is true use showCard() on all cards to display them else call filterOnTags(tags)
      for (var i = 0; i < this.cards.length; i++) {
        if (bankIsFiltered) {
          this.cards[i].showCard();
        } else {
          this.cards[i].filterOnTags(tags)
        }
  
      }
    }
  }
  
