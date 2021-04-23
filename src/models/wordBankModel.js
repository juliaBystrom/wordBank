import Bank from "./bank";

export class WordBankModel {
  constructor() {
    this.activeBankId = 0;
    this.banks = [new Bank(0)];
    this.observers = [];
    this.userID = 123;
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
    this.languageCombos =[]; 
  }


  toString() {
    return (
      this.currentBank +
      ", " +
      this.userID +
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
    this.userID = userId;
    console.log(this.userID);
    this.notifyObservers();
  }

  // SignIn action
  setCurrentUser(userId) {
    this.userID = userId;
    this.loggedIn = true;
    console.log(this.userID);
    this.notifyObservers();
  }

  /* setCurrentBank(bankID) {
    this.currentBank = bankID;
    return  this.activeBankId + ', '
          + this.userID + ', '
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

  createBank(id, language1, language2){
    this.languageCombos = [[language1, language2], ...this.languageCombos];
    this.banks = [new Bank(id), ...this.banks];
  }

  isLanguageComboUsed(language1, language2) {
    this.languageCombos.forEach(combo => {
      if( combo.includes([language1, language2]) ||
          combo.includes([language2, language1])) {
        return true;
      } else {
        return false;
      }
    });
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
