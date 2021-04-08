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
          func: this.sortLatestEdited
        }, 
        { sorting: "Most used",
          func: this.sortMostUsed
        } 
      ];

      //test data
      this.currentPhrase = "";
      this.currentTranslation ="je suis un chat"
      this.currentTag = "";
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
  }

  getCurrentBank(){
    
    return this.banks.filter(b => {
      return b.bankID === this.currentBank
    })[0];
  }

  sortLatestEdited(){
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

  createCard(phrase, tag) {
    console.log("created a card with phrase: " + phrase + " and tag: " + tag);

    this.getKeyBoards = this.getKeyBoards.bind(this);

    this.keyCountBanks = 0;
    this.getKeyBanks = this.getKeyBanks.bind(this);
    this.notifyObservers();
  }

  setPhrase(phrase){
    this.currentPhrase = phrase;
  }

  addTag(tag){
    this.tags=[...this.tags, tag];
  }

  setTag(tag){
    this.currentTag = tag;
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

    if (testing) {
      this.bankID = id;
      this.boards = [
        new Board("Board1", true, 0),
        new Board("Board2", true, 1),
        new Board("Board3", true, 2),
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

  /* 
   ----------------------------------------------------------
                 TAG FUNCIONALITY Bank
   ----------------------------------------------------------
  
    addTag, editTag and filterOnTag is used by being called in the WordBankModel

    Theese functions add tags, edit tagnames and update the show value of tags by interacting with this.tags of this Bank objects. 

  
  */

  addTag(tagName) {
    this.tags = [...this.tags, { id: this.getIdTags(), tag: tagName, show: false }];
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
  constructor(testing, id, commentOnS, leftS, rightS) {
    // super(props);
    if (testing) {
      this.cardID = id;
      this.comment = commentOnS;
      this.tag = "Verb";
      this.leftSentence = leftS;
      this.rightSentence = rightS;
      this.show = true;
    } else {
      this.cardID = [];
      this.comment = null;
      this.tag = null;
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
