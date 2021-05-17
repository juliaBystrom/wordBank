import Board from "./board";
import Card from "./card";

export default class Bank {
  constructor(id) {
    this.id = id;
    this.boards = [];
    this.fromLanguage = "";
    this.toLanguage = "";
    // Keeps track if no tags is choosed for filter
    this.bankIsFiltered = true;
    this.idCountCards = 0;
    this.idCountTags = 2;
    this.getIdCards = this.getIdCards.bind(this);
    // Binding is done to be able to pass theese funcitons to other classes but having the same this reference.
    this.getIdTags = this.getIdTags.bind(this);

    this.tags = [{ id: Number(this.getIdTags()), name: "", checked: false }];
  }

  reset() {
    this.boards = [];
    this.fromLanguage = "";
    this.toLanguage = "";
    this.tags = [];
    this.bankIsFiltered = true;
    this.idCountCards = 0;
    this.idCountTags = 2;
    this.getIdCards = this.getIdCards.bind(this);
    this.getIdTags = this.getIdTags.bind(this);
  }



  getIdTags() {
    this.idCountTags = this.idCountTags + 1;
    return Number(this.idCountTags);
  }

  getIdCards() {
    return this.idCountCards++;
  }

  addBoard(name, id) {
    // Obs only testing version. Outerwise if not testing the last is not needed
    this.boards = [...this.boards, new Board(name, id)];
    // 
  }

  /* 
     ----------------------------------------------------------
                   TAG FUNCIONALITY Bank
     ----------------------------------------------------------
     
      addTag, editTag and filterOnTag is used by being called in the WordBankModel
    
      Theese functions add tags, edit tagnames and update the checked value of tags by interacting with this.tags of this Bank objects. 
    
     
    */

  // Add tage will first check if the tag already exist. If not it will add it. Else it will just do a console log
  addTag(name) {
    const tag = this.tags.find((tag) => {
      return tag.name === name;
    });
    if (!tag) {
      this.tags = [
        ...this.tags,
        { id: this.getIdTags(), name: name, checked: false },
      ];
    } else {
    }
  }

  editTag(name, newTagName) {
    this.tags.map((tag) => {
      return tag.name !== name
        ? tag
        : { id: tag.id, name: newTagName, checked: tag.checked };
    });
  }

  filterOnTag(name) {
    this.checkedTags = 0;
    // Check or uncheck tag.
    this.tags.forEach((tag) => {
      if (tag.name === name) {
        if (!tag.checked) {
          tag.checked = true;
          this.checkedTags++;
        } else if (tag.checked) {
          tag.checked = false;
          this.checkedTags--;
        }
      }
    });

    // If bank is not filtered, all cards are shown
    // else if bankIsFiltered ; only cards with checked tags will be shown
    this.bankIsFiltered = this.checkedTags > 0;

    for (var i = 0; i < this.boards.length; i++) {
      this.boards[i].filterCards(this.bankIsFiltered, this.tags);
    }
  }

  /*
      Card functionality
      Add and edit cards


    */

  /*
    createCard(phrase, translation, saveToBoardId, tag) {
      var boardIndex = this.boards.findIndex((board) => {
        return board.id === Number(saveToBoardId);
      });
      this.boards[boardIndex].addCard(new Card(this.getIdCards(), "Kommentar Holder", phrase, translation, tag));
    }
    */

  setCardComment(newComment, cardId, boardId) {
    // Checks that the bank got a board array
    if (this.boards) {
      const boardIndex = this.boards.findIndex((board) => {
        return board.id === boardId;
      });
      // Checks that the board was found
      if (boardIndex !== -1) {
        this.boards[boardIndex].setCardComment(newComment, cardId);
      }
    }
  }

  setCardLeftSentence(newSentence, cardId, boardId) {
    // Checks that the bank got a board array
    if (this.boards) {
      const boardIndex = this.boards.findIndex((board) => {
        return board.id === boardId;
      });
      // Checks that the board was found
      if (boardIndex !== -1) {
        this.boards[boardIndex].setCardLeftSentence(newSentence, cardId);
      }
    }
  }

  setCardRightSentence(newSentence, cardId, boardId) {
    // Checks that the bank got a board array
    if (this.boards) {
      const boardIndex = this.boards.findIndex((board) => {
        return board.id === boardId;
      });
      // Checks that the board was found
      if (boardIndex !== -1) {
        this.boards[boardIndex].setCardRightSentence(newSentence, cardId);
      }
    }
  }

  setCardNewTag(newTagName, cardId, boardId) {
    // Checks that the bank got a board array
    if (this.boards) {
      const boardIndex = this.boards.findIndex((board) => {
        return board.id === boardId;
      });
      // Checks that the board was found
      if (boardIndex !== -1) {
        // This will return undefined if the tag does not exist
        const tag = this.tags.find((tag) => {
          return tag.name === newTagName;
        });
        // If the tag exist add it outerwise
        if (tag) {
          this.boards[boardIndex].setCardNewTag(tag.name, cardId);
        } else {
          this.addTag(newTagName);
          
          
          

          // Will take the first tag whitch should be the new one
          this.boards[boardIndex].setCardNewTag(newTagName, cardId);
        }
      }
    }
  }

  createCard(phrase, translation, saveToBoardId, tag, id) {
    var boardIndex = this.boards.findIndex((board) => {
      return Number(board.id) === Number(saveToBoardId);
    });

    this.boards[boardIndex].addCard(
      new Card(id, "", phrase, translation, tag)
    );
  }

  getCardInBoard(cardId, boardId) {
    return this.getBoard(boardId).cards.filter((card) => {
      return (card.id = cardId);
    });
  }

  moveCard(card, oldBoardId, newBoardId) {
    this.getBoard(newBoardId).addCard(card);
    this.getBoard(oldBoardId).deleteCard(card.id, oldBoardId);
  }

  deleteCard(cardId, boardId) {
    this.getBoard(boardId).deleteCard(cardId);
  }

  // Edit board title

  getBoard(id) {
    return this.boards.filter((board) => {
      return board.id === id;
    })[0];
  }

  getBoardId(title) {
    return this.boards.filter((board) => {
      return board.title === title;
    })[0].id;
  }

  getBoardIndex(id) {
    return this.boards.findIndex((board) => {
      return board.id === id;
    });
  }

  editBoardTitle(title, newTitle) {
    let id = this.getBoardId(title);
    this.boards[this.getBoardIndex(id)].title = newTitle;
    this.getBoard(id).editBoardTitle(newTitle);
  }

  // Delete board
  deleteBoard(id) {
    this.boards = this.boards.filter((board) => {
      return board.id !== id;
    });
  }

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
