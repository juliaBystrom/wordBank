export class WordBankModel {
    constructor() {
        this.currentBank = null;
        this.banks = [];
        this.observers = [];
        this.userID = null;
        this.languageFrom = null;
        this.languageTo = null;
    }


}

export class Bank{
    constructor(){
        this.bankID = null;
        this.boards = [];
        this.reverseTranslate = false;
    }

    sortBoards(){

    }

    addBoard(name) {
        this.boards =  [...this.boards, new Board(name)]
    }

}

export class Board{
    constructor(name){
        this.boardID = null;
        this.cards = [];
        this.title = name
        
    }

}

export class Card{
    constructor(){
        this.cardID = [];
        this.comment = null;
        this.tag = null;
        this.leftSentence = null
        this.rightSentence = null
    }

    setComment(){
        
    }
}

