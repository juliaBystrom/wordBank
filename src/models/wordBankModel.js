import Bank from "./bank";

export class WordBankModel {
  constructor() {
    this.setActiveBankId(0);
    this.banks = [new Bank(0, "Swedish", "English")];
    this.observers = [];
    this.userId = 123;
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
      this.activeBank +
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
  setActiveUser(userId) {
    this.userId = userId;
    this.loggedIn = true;
    console.log(this.userId);
    this.notifyObservers();
  }

  /* setActiveBankId(bankId) {
    this.activeBank = bankId;
    return  this.activeBankId + ', '
          + this.userId + ', '
          + this.languageFrom + ', '
          + this.languageTo;
  } */
  setActiveBankId(id) {
    this.activeBankId = id;
    this.notifyObservers();
  }

  getActiveBank() {
    return this.banks.filter((bank) => {
      return bank.id === this.activeBankId;
    })[0];
  }

  getActiveBankIndex(){
    return this.banks.indexOf(this.getActiveBank());
  }

  sortLatestEdited() {
    console.log("SORTING LATEST EDITED: ", this);
    this.getActiveBank().sortLatestEdited();
    this.notifyObservers();
  }

  sortMostUsed() {
    this.getActiveBank().sortMostUsed();
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

    this.banks[this.getActiveBankIndex()].createCard(
      phrase,
      translation,
      saveToBoardId,
      tag
    );

    this.notifyObservers();
  }

  setPhrase(phrase) {
    this.activePhrase = phrase;
    this.notifyObservers();
  }

  setTransPhrase(translation) {
    this.transPhrase = translation;
    this.notifyObservers();
  }

  setLanguageCombo(from, to){
    this.toLanguage = to;
    this.fromLanguage = from;
    this.languageCombos = [[from, to], this.languageCombos];
    this.notifyObservers();
  }

  setToLanguage(newLanguage) {
    this.toLanguage = newLanguage;
    this.languageCombos = [[this.fromLanguage, newLanguage], this.languageCombos];
    this.notifyObservers();
  }

  setFromLanguage(newLanguage) {
    this.fromLanguage = newLanguage;
    this.languageCombos = [[newLanguage, this.toLanguage], this.languageCombos];
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
    this.banks[this.getActiveBankIndex()].addBoard(name, this.getKeyBoards());
    this.notifyObservers();
  }

  createBank(id, language1, language2){
    this.languageCombos = [[language1, language2], ...this.languageCombos];
    this.banks = [new Bank(id, language1, language2), ...this.banks];
    this.setActiveBankId(id);
    this.notifyObservers();
  }

  isLanguageComboUsed(language1, language2) {
    console.log("Lang1:", language1);
    console.log("Lang2:", language2);
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
    this.banks[this.getActiveBankIndex()].addTag(name);
    this.notifyObservers();
  }

  //
  editTag(name, newTagNameName) {
    this.banks[this.getActiveBankIndex()].editTag(name, newTagNameName);
    this.notifyObservers();
  }

  filterOnTag(name) {
    this.banks[this.getActiveBankIndex()].filterOnTag(name);
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
