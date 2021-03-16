class WordBankModel {
    constructor() {
        this.currentBank = null;
        this.banks = [];
        this.observers = [];
        this.userID = null;
        this.languageFrom = null;
        this.languageTo = null;
    }


}

class Bank{
    constructor(){
        this.bankID = null;
        this.boards = [];
        this.reverseTranslate = false;
    }

    sortBoards(){

    }

    addBoard(name) {
        thiis.boards =  [...boards, new Board(name)]
    }

}

class Board{
    constructor(name){
        this.boardID = null;
        this.cards = [];
        this.title = name
        
    }

}

class Card{
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

