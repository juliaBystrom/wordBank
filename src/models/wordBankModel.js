import { LANGUAGES } from "../shared";

export class WordBankModel {
  constructor(testing) {
    // super(props);
    if (testing) {
      console.log("testing is true ...");
      this.currentBank = 0;
      this.banks = [new Bank(0, true)];
      this.observers = [];
      this.userID = 123;
      this.languageFrom = LANGUAGES.SWE;
      this.languageTo = LANGUAGES.ENG;
      this.isTesting = true;
      this.keyCountBoards = 3;
      this.sorts = [
        { sorting: "Latest edited",
          func: () => this.sortLatestEdited()
        }, 
        { sorting: "Most used",
          func: () => this.sortMostUsed()
        } 
      ];

      //test data
      // this.currentPhrase = "";
      // this.currentTranslation = "je suis un chat"
      // this.currentTag = "";
      this.tags = ["noun", "verb", "restaurant", "etc"];
      this.uid = 1;
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

    // Binding is done to be able to pass theese funcitons to other classes but having the same this reference.
    this.getKeyBoards = this.getKeyBoards.bind(this);
    this.keyCountBanks = 0;
    this.getKeyBanks = this.getKeyBanks.bind(this);
  }

  getCurrentBank(){
    return this.banks.filter(b => {
      return b.bankID === this.currentBank
    })[0];
  }

  sortLatestEdited(){
    console.log("SORTING LATEST EDITED: ", this)
    this.getCurrentBank().sortLatestEdited();
    this.notifyObservers();
  }

  sortMostUsed(){
    this.getCurrentBank().sortMostUsed();
    this.notifyObservers();
  }


  translate(phrase) {
    console.log("translate: " + phrase);
  }



  createCard(phrase, translation, saveToBoardId, tag) {

    console.log("will create a card with phrase: " + phrase + "\n  translation: " + translation + " \n tag: " + tag + " \n save to board: " + saveToBoardId);

    this.banks[this.currentBank].createCard(phrase, translation, saveToBoardId, tag);

    this.notifyObservers();
  }




  /*   setPhrase(phrase) {
      this.currentPhrase = phrase;
    } */

  // Commented out testing funciton for addTag. It breaks the use of this class original addTag
  /*   addTag(tag){
      this.tags=[...this.tags, tag];
    } */

  /*   setTag(tag) {
      this.currentTag = tag;
    } */

  getKeyBoards() {
    return this.keyCountBoards++;
  }

  getKeyBanks() {
    return this.keyCountBanks++;
  }

  addBoard(name) {
    // TODO Networking to add newboard
    this.banks[this.currentBank].addBoard(name, this.getKeyBoards());
    console.log("Ny board");
    console.log(this.banks[this.currentBank].boards);
    this.notifyObservers();

  }

  /* 
   ----------------------------------------------------------
                 TAG FUNCIONALITY WordBankModel
   ----------------------------------------------------------

  */
 
  addTag(tagName) {
    this.banks[this.currentBank].addTag(tagName);
    this.notifyObservers();
  }

  //  
  editTag(tagName, newTagName) {
    this.banks[this.currentBank].editTag(tagName, newTagName);
    this.notifyObservers();
  }


  filterOnTag(tagName) {
    this.banks[this.currentBank].filterOnTag(tagName);
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

    this.idCountCards = 0;
    this.getIdCards = this.getIdCards.bind(this);

    if (testing) {
      this.bankID = id;
      this.boards = [
        new Board("Board1", true, 0, { 0: this.getIdCards(), 1: this.getIdCards(), 2: this.getIdCards() }),
        new Board("Board2", true, 1, { 0: this.getIdCards(), 1: this.getIdCards(), 2: this.getIdCards() }),
        new Board("Board3", true, 2, { 0: this.getIdCards(), 1: this.getIdCards(), 2: this.getIdCards() }),
      ];
      this.reverseTranslate = false;
      this.testingBank = true;
      this.languageFrom = "Swedish";
      this.languageTo = "English";
      this.tags = [{ id: 0, tag: "Verb", show: false }, { id: 1, tag: "Thing", show: false }];
      // Keeps track if no tags is choosed for filter
      this.showAllCards = true;
      this.idCountTags = 2;




    } else {
      this.bankID = 0;
      this.boards = [];
      this.reverseTranslate = false;

      this.testingBank = false;
      this.tags = []
      // Keeps track if no tags is choosed for filter
      this.showAllCards = true;
      this.idCountTags = 0;
    }

    // Binding is done to be able to pass theese funcitons to other classes but having the same this reference.
    this.getIdTags = this.getIdTags.bind(this);

  }

  sortLatestEdited(){
    // TODO: order boards from left to right on last edit
    console.log("Sort Latest Edited");
    return;
  }

  sortMostUsed(){
    // TODO: order boards from left to right on most clicked
    console.log("Sort Most Used");
    return;
  }

  getIdTags() {
    return this.idCountTags++;
  }

  getIdCards() {
    return this.idCountCards++;
  }

  addBoard(name, id) {
    // Obs only testing version. Outerwise if not testing the last is not needed
    this.boards = [
      ...this.boards,
      new Board(name, true, id, { 0: this.getIdCards(), 1: this.getIdCards(), 2: this.getIdCards() })
    ];
  }

  /* 
   ----------------------------------------------------------
                 TAG FUNCIONALITY Bank
   ----------------------------------------------------------
   
    addTag, editTag and filterOnTag is used by being called in the WordBankModel
  
    Theese functions add tags, edit tagnames and update the show value of tags by interacting with this.tags of this Bank objects. 
  
   
  */

  // Add tage will first check if the tag already exist. If not it will add it. Else it will just do a console log
  addTag(tagName) {
    if (!this.tags.includes(tagName)) {
      this.tags = [...this.tags, { id: this.getIdTags(), tag: tagName, show: false }];
    } else {
      console.log("[Info from model]: Tag already exist. No new tag created");
    }
  }

  editTag(tagName, newTag) {

    this.tags.map((tagObject) => {
      return tagObject.tag !== tagName ? tagObject : { id: tagObject.id, tag: newTag, show: tagObject.show };

    })

  }

  /* 
    Toggles the value of tag with tagName
    It does also count how many tags have show: true
    If nrOfShow is 0 then no tags is curently being filtred which put the this.showAllCards to true
  
  */
  filterOnTag(tagName) {


    // Reset the nrOfShow of variables. This variable will count nr of tags not used for filtering 
    this.nrOfShow = 0;

    this.tags.map((tagObject) => {


      if (tagObject.tag === tagName) {

        // Because this is the tag to toggle befroe retuning the inverse value of show is checked for true.
        if (!tagObject.show) {
          this.nrOfShow++;
        }

        return { id: tagObject.id, tag: tagObject.tag, show: !tagObject.show }
      } else {
        if (tagObject.show) {
          this.nrOfShow++;
        }
        return tagObject;

      }
    })


    this.showAllCards = this.nrOfShow === 0;


    for (var i = 0; i < this.boards.length; i++) {
      this.boards[i].filterCards(this.showAllCards, this.tags);
    }

  }


  createCard(phrase, translation, saveToBoardId, tag) {
    console.log("Wanna save to id:");
    console.log(saveToBoardId);

    var boardIndex = this.boards.findIndex((boardObject) => {
      console.log("board id:");
      console.log(boardObject.boardID)

      return boardObject.boardID === Number(saveToBoardId);
    });

    console.log("In index: ");
    console.log(boardIndex);

    this.boards[boardIndex].addCard(new Card(true, this.getIdCards(), "Kommentar Holder", phrase, translation, tag));

  }

}


export class Board {
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

export class Card {
  constructor(testing, id, commentOnS, leftS, rightS, givenTag) {
    // super(props);
    if (testing) {
      this.cardID = id;
      this.comment = commentOnS;
      this.tag = givenTag;
      this.leftSentence = leftS;
      this.rightSentence = rightS;
      this.show = true;
    } else {
      this.cardID = [];
      this.comment = null;
      this.tag = givenTag;
      this.leftSentence = null;
      this.rightSentence = null;
      this.show = true;
    }
  }

  setComment() { }

  setShowTrue() {
    this.show = true;
  }

  // If the card have a tag ( not null, "", false or undefined) this method will update the show value depnding on the tag
  // If the card does not have an tag the show value will be set to false
  filterOnTags(tags) {
    if (this.tag) {
      const tagInfo = tags.find((tagInfo) => {
        return tagInfo.tag === this.tag

      })

      this.show = tagInfo.show;
    } else {
      this.show = false;
    }

  }

}
