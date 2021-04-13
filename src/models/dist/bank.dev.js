"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _board = _interopRequireDefault(require("./board"));

var _card = _interopRequireDefault(require("./card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bank =
/*#__PURE__*/
function () {
  function Bank(id, testing) {
    _classCallCheck(this, Bank);

    // super(props);
    this.idCountCards = 0;
    this.getIdCards = this.getIdCards.bind(this);

    if (testing) {
      this.bankID = id;
      this.boards = [new _board["default"]("Board1", true, 0, {
        0: this.getIdCards(),
        1: this.getIdCards(),
        2: this.getIdCards()
      }), new _board["default"]("Board2", true, 1, {
        0: this.getIdCards(),
        1: this.getIdCards(),
        2: this.getIdCards()
      }), new _board["default"]("Board3", true, 2, {
        0: this.getIdCards(),
        1: this.getIdCards(),
        2: this.getIdCards()
      })];
      this.reverseTranslate = false;
      this.testingBank = true;
      this.languageFrom = "Swedish";
      this.languageTo = "English";
      this.tags = [{
        id: 0,
        tag: "Verb",
        show: false
      }]; // Keeps track if no tags is choosed for filter

      this.showAllCards = true;
      this.idCountTags = 2;
    } else {
      this.bankID = 0;
      this.boards = [];
      this.reverseTranslate = false;
      this.testingBank = false;
      this.tags = []; // Keeps track if no tags is choosed for filter

      this.showAllCards = true;
      this.idCountTags = 0;
    } // Binding is done to be able to pass theese funcitons to other classes but having the same this reference.


    this.getIdTags = this.getIdTags.bind(this);
  }

  _createClass(Bank, [{
    key: "sortLatestEdited",
    value: function sortLatestEdited() {
      // TODO: order boards from left to right on last edit
      console.log("Sort Latest Edited");
      return;
    }
  }, {
    key: "sortMostUsed",
    value: function sortMostUsed() {
      // TODO: order boards from left to right on most clicked
      console.log("Sort Most Used");
      return;
    }
  }, {
    key: "getIdTags",
    value: function getIdTags() {
      return this.idCountTags++;
    }
  }, {
    key: "getIdCards",
    value: function getIdCards() {
      return this.idCountCards++;
    }
  }, {
    key: "addBoard",
    value: function addBoard(name, id) {
      // Obs only testing version. Outerwise if not testing the last is not needed
      this.boards = [].concat(_toConsumableArray(this.boards), [new _board["default"](name, true, id, {
        0: this.getIdCards(),
        1: this.getIdCards(),
        2: this.getIdCards()
      })]);
    }
    /* 
     ----------------------------------------------------------
                   TAG FUNCIONALITY Bank
     ----------------------------------------------------------
     
      addTag, editTag and filterOnTag is used by being called in the WordBankModel
    
      Theese functions add tags, edit tagnames and update the show value of tags by interacting with this.tags of this Bank objects. 
    
     
    */
    // Add tage will first check if the tag already exist. If not it will add it. Else it will just do a console log

  }, {
    key: "addTag",
    value: function addTag(tagName) {
      if (!this.tags.includes(tagName)) {
        this.tags = [].concat(_toConsumableArray(this.tags), [{
          id: this.getIdTags(),
          tag: tagName,
          show: false
        }]);
      } else {// console.log("[Info from model]: Tag already exist. No new tag created");
      }
    }
  }, {
    key: "editTag",
    value: function editTag(tagName, newTag) {
      this.tags.map(function (t) {
        return t.tag !== tagName ? t : {
          id: t.id,
          tag: newTag,
          show: t.show
        };
      });
    }
    /* 
      Toggles the value of tag with tagName
      It does also count how many tags have show: true
      If nrOfShow is 0 then no tags is curently being filtred which put the this.showAllCards to true
    
    */

  }, {
    key: "filterOnTag",
    value: function filterOnTag(tagName) {
      var _this = this;

      // Reset the nrOfShow of variables. This variable will count nr of tags not used for filtering 
      this.nrOfShow = 0;
      this.tags.map(function (t) {
        if (t.tag === tagName) {
          // Because this is the tag to toggle befroe retuning the inverse value of show is checked for true.
          if (!t.show) {
            _this.nrOfShow++;
          }

          return {
            id: t.id,
            tag: t.tag,
            show: !t.show
          };
        } else {
          if (t.show) {
            _this.nrOfShow++;
          }

          return t;
        }
      });

      if (this.nrOfShow - this.tags.length === 0) {
        this.showAllCards = true;
      } // this.showAllCards = this.nrOfShow === 0;


      console.log("nrOfShow", this.nrOfShow);
      console.log("Equality assignment:", this.nrOfShow === 0);

      for (var i = 0; i < this.boards.length; i++) {
        this.boards[i].filterCards(this.showAllCards, this.tags);
      }
    }
  }, {
    key: "createCard",
    value: function createCard(phrase, translation, saveToBoardId, tag) {
      var boardIndex = this.boards.findIndex(function (boardObject) {
        return boardObject.boardID === Number(saveToBoardId);
      });
      this.boards[boardIndex].addCard(new _card["default"](true, this.getIdCards(), "Kommentar Holder", phrase, translation, tag));
    }
  }]);

  return Bank;
}();

exports["default"] = Bank;