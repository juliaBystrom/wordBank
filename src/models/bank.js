import Board from "./board";
import Card from "./card";

export default class Bank {
    constructor(id) {
  
      this.bankID = id;
      this.boards = [];
      this.languageFrom = "Swedish";
      this.languageTo = "English";
      this.tags = [ { id: 0, tag: "Verb", show: false },
                  ];
      // Keeps track if no tags is choosed for filter
      this.showAllCards = true;

      this.idCountCards = 0;
      this.idCountTags = 2;
      this.getIdCards = this.getIdCards.bind(this);
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
  
      this.tags.map((t) => {
        return t.tag !== tagName ? t : { id: t.id, tag: newTag, show: t.show };
  
      })
  
    }
  
    /* 
      Toggles the value of tag with tagName
      It does also count how many tags have show: true
      If nrOfShow is 0 then no tags is curently being filtred which put the this.showAllCards to true
    
    */
    filterOnTag(tagName) {

      // Check or uncheck tag.
      this.tags.map((t) => {
        if (t.tag === tagName) {
          if (!t.show) {
            t.show = true;
            this.nrOfShow++;
          } else if (t.show) {
            t.show = false;
            this.nrOfShow--;
          }
        } 
      })

      // Keep track of unchecked tags.
      var uncheckedTags = 0;
      this.tags.map((tag)=>{
        if(tag.show == false){
          uncheckedTags++;
        }
      });
  
      // If no tag is checked, show all cards.
      this.showAllCards = this.tags.length-uncheckedTags === 0;
  
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