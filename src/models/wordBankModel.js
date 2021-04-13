import { LANGUAGES } from "../shared";
import Bank from "./bank";


export class WordBankModel {
  constructor() {

      this.currentBank = 0;
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
      // Binding is done to be able to pass these funcitons to other classes but having the same this reference.
      this.getKeyBoards = this.getKeyBoards.bind(this);
      this.keyCountBanks = 0;
      this.getKeyBanks = this.getKeyBanks.bind(this);
  }

  toString() {
    return  this.currentBank + ', '
          + this.userID + ', '
          + this.languageFrom + ', '
          + this.languageTo;
  }
  setCurrentBank(bankID){
    this.currentBank = bankID;
    this.notifyObservers();
  }

  getCurrentBank() {
    return this.banks.filter((b) => {
      return b.bankID === this.currentBank;
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


  translate(phrase) {
    console.log("translate: " + phrase);
  }

  createCard(phrase, translation, saveToBoardId, tag) {
    console.log(
      "will create a card with phrase: " +
        phrase +
        "\n  translation: " +
        translation +
        " \n tag: " +
        tag +
        " \n save to board: " +
        saveToBoardId
    );

    this.banks[this.currentBank].createCard(
      phrase,
      translation,
      saveToBoardId,
      tag
    );

    this.notifyObservers();

  }
  //Testkod ----------------------------------
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
  //---------------------------------------

  getKeyBoards() {
    return this.keyCountBoards++;
  }

  getKeyBanks() {
    return this.keyCountBanks++;
  }

  addBoard(name) {
    // TODO Networking to add newboard
    this.banks[this.currentBank].addBoard(name, this.getKeyBoards());

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

