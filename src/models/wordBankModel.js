import { LANGUAGES } from '../shared';

export class WordBankModel {

    constructor(testing) {
        // super(props);

        if (testing) {
            console.log(testing)
            console.log("testing is true ...")
            this.currentBank = 0;
            this.banks = [new Bank(0, true)];
            this.observers = [];
            this.userID = 123;
            this.languageFrom = LANGUAGES.SWE;
            this.languageTo = LANGUAGES.ENG;

        } else {
            this.currentBank = null;
            this.banks = [];
            this.observers = [];
            this.userID = null;
            this.languageFrom = null;
            this.languageTo = null;
        }
    }

}

export class Bank {
    constructor(id, testing) {
        // super(props);

        if (testing) {
            this.bankID = id;
            this.boards = [new Board("Board1", true, 0), new Board("Board2", true, 1), new Board("Board3", true, 2)];
            this.reverseTranslate = false;

        } else {
            this.bankID = null;
            this.boards = [];
            this.reverseTranslate = false;

        }

    }

    sortBoards() {

    }

    addBoard(name) {
        // TODO Networking to add newboard
        this.boards = [...this.boards, new Board(name, true, Math.random())]
    }

}

export class Board {
    constructor(nameOfBoard, testing, id) {

        if (testing) {
            this.boardID = id;
            this.cards = [new Card(true, id * 10 + 0, "Kommentar 0", "Hej", "Hello"), new Card(true, id * 10 + 1, "Kommentar 2", "Dag", "Day"), new Card(true, id * 10 + 2, "Kommentar 3", "Natt", "Night"), new Card(true, id * 10 + 3, "Kommentar 4", "Fest", "Sleep"), new Card(true, id * 10 + 4, "Kommentar 5", "Kul", "Fun"),];
            this.title = nameOfBoard
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
            this.leftSentence = null
            this.rightSentence = null
        }

    }

    setComment() {

    }
}

