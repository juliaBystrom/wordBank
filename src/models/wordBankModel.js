import Bank from "./bank";

export class WordBankModel {
  constructor() {
    this.activeBankId = 0;
    this.banks = [new Bank(0)];
    this.observers = [];
    this.keyCountBoards = 3;
    this.sortings = [
      { name: "Latest edited", func: () => this.sortLatestEdited() },
      { name: "Most used", func: () => this.sortMostUsed() },
    ];
    this.transPhrase = "";
    this.toLanguage = "en";
    this.fromLanguage = "sv";
    this.loggedIn = false;
    this.placeholder = "Skriv här";
    // Binding is done to be able to pass these funcitons to other classes but having the same this reference.
    this.getKeyBoards = this.getKeyBoards.bind(this);
    this.keyCountBanks = 0;
    this.getKeyBanks = this.getKeyBanks.bind(this);
  }

  toString() {
    return (
      this.currentBank +
      ", " +
      this.userId +
      ", " +
      this.languageFrom +
      ", " +
      this.languageTo
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

  getCurrentBank() {
    return this.banks.filter((bank) => {
      return bank.id === this.activeBankId;
    })[0];
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

  createCard(phrase, translation, saveToBoardId, tag) {
    console.log(
      "will create a card with phrase: " +
        phrase +
        "\n  translation: " +
        translation +
        " \n name: " +
        tag +
        " \n save to board: " +
        saveToBoardId
    );

    this.banks[this.activeBankId].createCard(
      phrase,
      translation,
      saveToBoardId,
      tag
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

  getKeyBoards() {
    return this.keyCountBoards++;
  }

  getKeyBanks() {
    return this.keyCountBanks++;
  }

  addBoard(name) {
    // TODO Networking to add newboard
    this.banks[this.activeBankId].addBoard(name, this.getKeyBoards());

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
