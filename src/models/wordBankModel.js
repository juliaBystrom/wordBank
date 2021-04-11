import { LANGUAGES } from "../shared";
import Bank from "./bank";

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
        { sorting: "Latest edited", func: () => this.sortLatestEdited() },
        { sorting: "Most used", func: () => this.sortMostUsed() },
      ];

      //test data
      // this.currentPhrase = "";
      // this.currentTranslation = "je suis un chat"
      // this.currentTag = "";
      this.tags = ["noun", "verb", "restaurant", "etc"];
      this.uid = 1;
      this.transPhrase = "";
      this.toLanguage = "en";
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

    // Binding is done to be able to pass theese funcitons to other classes but having the same this reference.
    this.getKeyBoards = this.getKeyBoards.bind(this);
    this.keyCountBanks = 0;
    this.getKeyBanks = this.getKeyBanks.bind(this);
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

  /*   setPhrase(phrase) {
      this.currentPhrase = phrase;
    } */

  // Commented out testing funciton for addTag. It breaks the use of this class original addTag
  /*   addTag(tag){
      this.tags=[...this.tags, tag];
    } */

  /*   setTag(tag) {
      this.currentTag = tag;
    } */

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
