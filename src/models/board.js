
import Card from "./card";

export default class Board {
    constructor(nameOfBoard, testing, id, getIdCardsArray) {
      if (testing) {
        this.boardID = id;
  
        this.cards = [
          new Card(true, getIdCardsArray[0], "Kommentar 0", "Hej", "Hello", "Verb"),
          new Card(true, getIdCardsArray[1], "Kommentar 1", "Fest", "Sleep", "Verb"),
          new Card(true, getIdCardsArray[2], "Kommentar 2", "Kul", "Fun", "Verb"),
        ];
        this.title = nameOfBoard;
      } else {
        this.boardID = id;
        this.cards = [];
        this.title = "";
      }
    }
  
    /*
      Will add card object to this board
    */
    addCard(cardToAdd) {
      this.cards = [...this.cards, cardToAdd];
    }
  
    filterCards(showAll, tags) {
  
      // If showAll is true use setShowTrue() on all cards to display them else call filterOnTags(tags)
      for (var i = 0; i < this.cards.length; i++) {
        if (showAll) {
          this.cards[i].setShowTrue();
        } else {
          this.cards[i].filterOnTags(tags)
        }
  
      }
    }
  
  
  
  
  }
  
