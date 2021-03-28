import { LANGUAGES } from "../shared";

export class WordBankModel {
  constructor(testing) {
    // super(props);
    if (testing) {
      console.log(testing);
      console.log("testing is true ...");
      this.currentBank = 0;
      this.banks = [new Bank(0, true)];
      this.observers = [];
      this.userID = 123;

      this.languageFrom = LANGUAGES.SWE;
      this.languageTo = LANGUAGES.ENG;
      this.isTesting = true;
      this.keyCountBoards = 3;
    } else {
      this.currentBank = null;
      this.banks = [];
      this.observers = [];
      this.userID = null;
      this.languageFrom = null;
      this.languageTo = null;

      this.isTesting = false;
      this.keyCountBoards = 0;
    }
  }

  translate(phrase) {
    console.log("translate: " + phrase);
  }

  createCard(phrase, tag) {
    console.log("created a card with phrase: " + phrase + " and tag: " + tag);

    this.getKeyBoards = this.getKeyBoards.bind(this);

    this.keyCountBanks = 0;
    this.getKeyBanks = this.getKeyBanks.bind(this);
  }

  getKeyBoards() {
    return this.keyCountBoards++;
  }

  getKeyBanks() {
    return this.keyCountBanks++;
  }

  addBoard(name) {
    // TODO Networking to add newboard
    this.banks[this.currentBank].boards = [
      ...this.banks[this.currentBank].boards,
      new Board(name, this.isTesting, this.getKeyBoards()),
    ];
    console.log("Ny board");
    console.log(this.banks[this.currentBank].boards);
    this.notifyObservers();
  }

  /* 
        Observer code taken from the awesome repo: fannyev-juliabys-TW2_TW3/js/DinnerModel.js

         :) 
    */

  addObserver(callback) {
    this.observers = [...this.observers, callback];
  }

  removeObserver(callback) {
    this.observers = this.observers.filter((cb) => {
      return cb !== callback;
    });
  }

  notifyObservers() {
    if (this.observers) {
      this.observers.forEach((cb) => {
        try {
          cb();
        } catch (error) {
          console.error(error);
        }
      });
    }
  }
}

export class Bank {
  constructor(id, testing) {
    // super(props);

    if (testing) {
      this.bankID = id;

      this.boards = [
        new Board("Board1", true, 0),
        new Board("Board2", true, 1),
        new Board("Board3", true, 2),
      ];
      this.reverseTranslate = false;
      this.testingBank = true;
    } else {
      this.bankID = null;
      this.boards = [];
      this.reverseTranslate = false;

      this.testingBank = false;
    }
  }

  sortBoards() {}
}

export class Board {
  constructor(nameOfBoard, testing, id) {
    if (testing) {
      this.boardID = id;
      this.cards = [
        new Card(true, id * 10 + 0, "Kommentar 0", "Hej", "Hello"),
        new Card(true, id * 10 + 1, "Kommentar 2", "Dag", "Day"),
        new Card(true, id * 10 + 2, "Kommentar 3", "Natt", "Night"),
        new Card(true, id * 10 + 3, "Kommentar 4", "Fest", "Sleep"),
        new Card(true, id * 10 + 4, "Kommentar 5", "Kul", "Fun"),
      ];
      this.title = nameOfBoard;
    } else {
      this.boardID = null;
      this.cards = [];
      this.title = "";
    }
  }
}

export class Card {
  constructor(testing, id, commentOnS, leftS, rightS) {
    // super(props);
    if (testing) {
      this.cardID = id;
      this.comment = commentOnS;
      this.tag = null;
      this.leftSentence = leftS;
      this.rightSentence = rightS;
    } else {
      this.cardID = [];
      this.comment = null;
      this.tag = null;
      this.leftSentence = null;
      this.rightSentence = null;
    }
  }

  setComment() {}
}

/* export class Card {
  constructor(testing, id, commentOnS, leftS, rightS) {
    // super(props);
    if (testing) {
      this.cardID = id;
      this.comment = commentOnS;
      this.tag = null;
      this.leftSentence = leftS;
      this.rightSentence = rightS;
    } else {
      this.cardID = [];
      this.comment = null;
      this.tag = null;
      this.leftSentence = null;
      this.rightSentence = null;
    }
  }

  setComment() {}
} */
