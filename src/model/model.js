import Bank from "./bank";
import * as df from "../firebase/deleteFromFirebase";

/*
 Model for the app logic
 Keep state values for application
*/

export class Model {
  constructor() {
    this.activeBankId = 0;
    this.banks = [new Bank(0)];
    this.observers = [];
    this.transPhrase = "";
    this.toLanguage = "en";
    this.fromLanguage = "sv";
    this.loggedIn = false;
    this.userId = "";
    this.placeholder = "Skriv här";
    // Binding is done to be able to pass these funcitons to other classes but having the same this reference.
    this.boardId = 0;
    this.loading = false;
    this.boardId = 0;
    this.cardId = Number(0);
    this.refresh = true;
  }

  logout() {
    this.loading = true;
    window.location.reload();
  }

  toString() {
    return (
      this.currentBank +
      ", " +
      this.userId +
      ", " +
      this.fromLanguage +
      ", " +
      this.toLanguage
    );
  }

  // SignUp action
  createUserModel(userId) {
    this.userId = userId;

    this.notifyObservers();
  }

  setLoggedIn(bool) {
    this.loggedIn = bool;
    this.notifyObservers();
  }

  setRefresh(isRefreshing) {
    this.refresh = isRefreshing;
    this.notifyObservers();
  }

  // SignIn action
  setCurrentUser(userId) {
    this.userId = userId;
    this.loggedIn = true;

    this.notifyObservers();
  }

  loadingData(status) {
    this.loading = status;
    this.notifyObservers();
  }

  setCurrentBank(id) {
    this.activeBankId = id;
    this.notifyObservers();
  }

  addBank(id) {
    this.banks = [new Bank(id), ...this.banks];
  }

  getActiveBank() {
    return this.banks[this.activeBankId];
  }

  createCard(phrase, translation, boardId, tag) {
    this.cardId = Number(this.cardId) + 1;
    //
    this.banks[this.activeBankId].createCard(
      phrase,
      translation,
      Number(boardId),
      tag,
      this.cardId,
      ""
    );
    this.notifyObservers();
  }

  createCardFromFirebase(phrase, translation, boardId, tag, id, comment) {
    this.banks[this.activeBankId].createCard(
      phrase,
      translation,
      Number(boardId),
      tag,
      id,
      comment
    );
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

  addBoard(name) {
    this.banks[this.activeBankId].addBoard(name, ++this.boardId);
    this.notifyObservers();
  }

  addBoardFromFirebase(name, id) {
    this.banks[this.activeBankId].addBoard(name, id);
    this.notifyObservers();
  }

  /* 
   ----------------------------------------------------------
                 TAG FUNCTIONALITY Model
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
                 CARD FUNCTIONALITY Model
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

  moveCard(card, oldBoardId, newBoardId) {
    this.banks[this.activeBankId].moveCard(card, oldBoardId, newBoardId);
    df.deleteCardFromBoard(this.userId, this.activeBankId, oldBoardId, card.id);
    this.notifyObservers();
  }

  deleteCard(cardId, boardId) {
    this.banks[this.activeBankId].deleteCard(cardId, boardId);
    df.deleteCardFromBoard(this.userId, this.activeBankId, boardId, cardId);
    this.notifyObservers();
  }

  /* 
   ----------------------------------------------------------
                 BOARD FUNCTIONALITY Model
   ----------------------------------------------------------

  */

  editBoardTitle(title, newTitle) {
    this.banks[this.activeBankId].editBoardTitle(title, newTitle);
    this.notifyObservers();
  }

  deleteBoard(id) {
    this.banks[this.activeBankId].deleteBoard(id);
    df.deleteBoard(this.userId, this.activeBankId, id);
    this.notifyObservers();
  }

  userHasBoards() {
    if (this.banks[this.activeBankId].boards.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  /* 
      Observer code taken from the tutorial repo: fannyev-juliabys-TW2_TW3/js/DinnerModel.js
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
