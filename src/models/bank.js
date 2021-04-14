import Board from "./board";
import Card from "./card";

export default class Bank {
    constructor(id) {
  
      this.id = id;
      this.boards = [];
      this.languageFrom = "Swedish";
      this.languageTo = "English";
      this.tags = [ { id: 0, name: "Verb", checked: false },
                  ];
      // Keeps track if no tags is choosed for filter
      this.bankIsFiltered = true;

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
    
      Theese functions add tags, edit tagnames and update the checked value of tags by interacting with this.tags of this Bank objects. 
    
     
    */
  
    // Add tage will first check if the tag already exist. If not it will add it. Else it will just do a console log
    addTag(name) {
      if (!this.tags.includes(name)) {
        this.tags = [...this.tags, { id: this.getIdTags(), name: name, checked: false }];
      } else {
        // console.log("[Info from model]: Tag already exist. No new tag created");
      }
    }
  
    editTag(name, newTagName) {
  
      this.tags.map((tag) => {
        return tag.name!== name ? tag : { id: tag.id, name: newTagName, checked: tag.checked };
  
      })
  
    }
  
    /* 
      Toggles the value of tag with name
      It does also count how many tags have checked: true
      If checkedTags is 0 then no tags is curently being filtred which put the this.bankIsFiltered to true
    
    */
    filterOnTag(name) {

      // Check or uncheck tag.
      this.tags.map((tag) => {
        if (tag.name === name) {
          if (!tag.checked) {
            tag.checked = true;
            this.checkedTags++;
          } else if (tag.checked) {
            tag.checked = false;
            this.checkedTags--;
          }
        } 
      })

      // Keep track of unchecked tags.
      var uncheckedTags = 0;
      this.tags.map((tag)=>{
        if(tag.checked == false){
          uncheckedTags++;
        }
      });
  
      // If no tag is checked, checked all cards.
      this.bankIsFiltered = this.tags.length-uncheckedTags === 0;
  
      for (var i = 0; i < this.boards.length; i++) {
        this.boards[i].filterCards(this.bankIsFiltered, this.tags);
      }
  
    }
  
  
    createCard(phrase, translation, saveToBoardId, tag) {
      var boardIndex = this.boards.findIndex((boardObject) => {
        return boardObject.id === Number(saveToBoardId);
      });
      this.boards[boardIndex].addCard(new Card(true, this.getIdCards(), "Kommentar Holder", phrase, translation, tag));
    }
  
  }