import Bank from "./bank";
import * as dbf from "../deleteFromFirebase" ;


export class WordBankModel {
  constructor() {
    this.activeBankId = 0;
    this.banks = [new Bank(0)];
    this.observers = [];

    this.sortings = [
      { name: "Latest edited", func: () => this.sortLatestEdited() },
      { name: "Most used", func: () => this.sortMostUsed() },
    ];
    this.transPhrase = "";
    this.toLanguage = "en";
    this.fromLanguage = "sv";
    this.loggedIn = false;
    this.userId = "";
    this.placeholder = "Skriv här";
    // Binding is done to be able to pass these funcitons to other classes but having the same this reference.
    this.boardId = 0;
    this.keyCountBanks = 0;
    this.getKeyBanks = this.getKeyBanks.bind(this);

    this.boardId = 0;
    this.cardId = 0;
  }

  toString() {
    return (
      this.currentBank + ", " + this.userId + ", " + this.languageFrom + ", " + this.languageTo
    );
    // + this.observers + ', '
    //  + ', '
    // + this.sorts;
  }

  // SignUp action
  createUserModel(userId) {
    this.userId = userId;
    console.log(this.userId);
    this.notifyObservers();
  }

  setLoggedIn(bool){
    this.loggedIn = bool;
    this.notifyObservers();
  }

  // SignIn action
  setCurrentUser(userId) {
    this.userId = userId;
    this.loggedIn = true;
    console.log(this.userId);
    this.notifyObservers();
  }

  /* setCurrentBank(bankID) {
    this.currentBank = bankID;
    return  this.activeBankId + ', '
          + this.userId + ', '
          + this.languageFrom + ', '
          + this.languageTo;
  } */
  setCurrentBank(id) {
    this.activeBankId = id;
    this.notifyObservers();
  }

  addBank(id) {
    this.banks = [new Bank(id), ...this.banks];
  }

  getCurrentBank() {
    return this.banks[0];
  }

  sortLatestEdited() {
    console.log("SORTING LATEST EDITED: ", this);
    this.getCurrentBank().sortLatestEdited();
    this.notifyObservers();
  }

  sortMostUsed() {
    this.getCurrentBank().sortMostUsed();
    this.notifyObservers();
  }

  createCard(phrase, translation, boardId, tag) {
    this.banks[this.activeBankId].createCard(
      phrase,
      translation,
      Number(boardId),
      tag,
      ++this.cardId
    );
    this.notifyObservers();
  }

  createCardFromFirebase(phrase, translation, boardId, tag, id) {
    this.banks[this.activeBankId].createCard(phrase, translation, Number(boardId), tag, id);
    this.notifyObservers();
  }

  setPhrase(phrase) {
    this.currentPhrase = phrase;
    this.notifyObservers();
  }

  setTransPhrase(translation) {
    this.transPhrase = translation;
    this.notifyObservers();
  }

  setToLanguage(newLanguage) {
    this.toLanguage = newLanguage;
    this.notifyObservers();
  }

  setFromLanguage(newLanguage) {
    this.fromLanguage = newLanguage;
    this.notifyObservers();
  }
  //"type here" men kan översättas till andra språk
  setPlaceholder(newText) {
    this.placeholder = newText;
    this.notifyObservers();
  }

  getKeyBanks() {
    return this.keyCountBanks++;
  }

  addBoard(name) {
    // TODO Networking to add newboard
    console.log("activeBankId", this.activeBankId);
    this.banks[this.activeBankId].addBoard(name, ++this.boardId);
    console.log("id of board: ", this.boardId);
    this.notifyObservers();
  }

  addBoardFromFirebase(name, id) {
    this.banks[this.activeBankId].addBoard(name, id);
    this.notifyObservers();
  }

  /* 
   ----------------------------------------------------------
                 TAG FUNCIONALITY WordBankModel
   ----------------------------------------------------------

  */

  addTag(name) {
    this.banks[this.activeBankId].addTag(name);
    this.notifyObservers();
  }

  //
  editTag(name, newTagNameName) {
    this.banks[this.activeBankId].editTag(name, newTagNameName);
    this.notifyObservers();
  }

  filterOnTag(name) {
    this.banks[this.activeBankId].filterOnTag(name);
    this.notifyObservers();
  }

  /* 
   ----------------------------------------------------------
                 CARD FUNCIONALITY WordBankModel
   ----------------------------------------------------------

  */

  setCardComment(newComment, cardId, boardId) {
    this.banks[this.activeBankId].setCardComment(newComment, cardId, boardId);
    this.notifyObservers();
  }

  setCardLeftSentence(newSentence, cardId, boardId) {
    this.banks[this.activeBankId].setCardLeftSentence(
      newSentence,
      cardId,
      boardId
    );
    this.notifyObservers();
  }
  setCardRightSentence(newSentence, cardId, boardId) {
    this.banks[this.activeBankId].setCardRightSentence(
      newSentence,
      cardId,
      boardId
    );
    this.notifyObservers();

  }

  setCardNewTag(newTagName, cardId, boardId) {
    this.banks[this.activeBankId].setCardNewTag(newTagName, cardId, boardId);
    this.notifyObservers();

  }

  // Edit board
  editBoardTitle(title, newTitle){
    this.banks[this.activeBankId].editBoardTitle(title, newTitle);
    this.notifyObservers();
  }

  // Delete board
  deleteBoard(id){
    console.log("----> model id: ", id);
    this.banks[this.activeBankId].deleteBoard(this.userId, id);
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
