import Board from "./board";
import Card from "./card";

export default class Bank {
    constructor(id, testing) {
      // super(props);
  
      this.idCountCards = 0;
      this.getIdCards = this.getIdCards.bind(this);
  
      if (testing) {
        console.log("Skapade bank")
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
        // console.log("[Info from model]: Tag already exist. No new tag created");
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

  
      var boardIndex = this.boards.findIndex((boardObject) => {

  
        return boardObject.boardID === Number(saveToBoardId);
      });
  
  
      this.boards[boardIndex].addCard(new Card(true, this.getIdCards(), "Kommentar Holder", phrase, translation, tag));
  
    }
  
  }