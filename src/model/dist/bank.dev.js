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
  function Bank(id) {
    _classCallCheck(this, Bank);
    this.id = id;
    this.idCountCards = 0;
    this.idCountTags = 0;
    this.getIdCards = this.getIdCards.bind(this);
    this.boards = [new _board["default"]("Board1", 0, {
      0: this.getIdCards(),
      1: this.getIdCards(),
      2: this.getIdCards()
    }), new _board["default"]("Board2", 1, {
      0: this.getIdCards(),
      1: this.getIdCards(),
      2: this.getIdCards()
    }), new _board["default"]("Board3", 2, {
      0: this.getIdCards(),
      1: this.getIdCards(),
      2: this.getIdCards()
    })];
    this.fromLanguage = "Swedish";
    this.toLanguage = "English";
    this.tags = [{
      id: 0,
      name: "Verb",
      checked: false
    }]; // Keeps track if no tags is choosed for filter
    this.bankIsFiltered = true;
    this.getIdTags = this.getIdTags.bind(this);
  }

  _createClass(Bank, [{
    key: "sortAlphabetically",
    value: function sortAlphabetically() {
      // TODO: order boards from left to right on last edit
      
      return;
    }
  }, {
    key: "sortMostUsed",
    value: function sortMostUsed() {
      // TODO: order boards from left to right on most clicked
      
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
      this.boards = [].concat(_toConsumableArray(this.boards), [new _board["default"](name, id, {
        0: this.getIdCards(),
        1: this.getIdCards(),
        2: this.getIdCards()
      })]);
    }
    /* 
     ----------------------------------------------------------
                   TAG FUNCIONALITY Bank
     ----------------------------------------------------------
     
      addTag, editTag and filterOnTag is used by being called in the Model
    
      Theese functions add tags, edit tagnames and update the checked value of tags by interacting with this.tags of this Bank objects. 
    
     
    */
    // Add tage will first check if the tag already exist. If not it will add it. Else it will just do a console log

  }, {
    key: "addTag",
    value: function addTag(name) {
      if (!this.tags.includes(name)) {
        this.tags = [].concat(_toConsumableArray(this.tags), [{
          id: this.getIdTags(),
          name: name,
          checked: false
        }]);
      } else {// 
      }
    }
  }, {
    key: "editTag",
    value: function editTag(name, newTagName) {
      this.tags.map(function (tag) {
        return tag.name!== name ? tag : {
          id: tag.id,
          name: newTagName,
          checked: tag.checked
        };
      });
    }
    /* 
      Toggles the value of tag with name
      It does also count how many tags have checked: true
      If checkedTags is 0 then no tags is curently being filtred which put the this.bankIsFiltered to true
    
    */

  }, {
    key: "filterOnTag",
    value: function filterOnTag(name) {
      var _this = this;

      // Reset the checkedTags of variables. This variable will count nr of tags not used for filtering 
      this.checkedTags = 0;
      this.tags.map(function (tag) {
        if (tag.name=== name) {
          // Because this is the tag to toggle befroe retuning the inverse value of checked is checked for true.
          if (!tag.checked) {
            _this.checkedTags++;
          }

          return {
            id: tag.id,
            name: tag.tag,
            checked: !tag.checked
          };
        } else {
          if (tag.checked) {
            _this.checkedTags++;
          }

          return t;
        }
      });

      if (this.checkedTags - this.tags.length === 0) {
        this.bankIsFiltered = true;
      } // this.bankIsFiltered = this.checkedTags === 0;


      
      

      for (var i = 0; i < this.boards.length; i++) {
        this.boards[i].filterCards(this.bankIsFiltered, this.tags);
      }
    }
  }, {
    key: "createCard",
    value: function createCard(phrase, translation, saveToBoardId, tag) {
      var boardIndex = this.boards.findIndex(function (boardObject) {
        return boardObject.id === Number(saveToBoardId);
      });
      this.boards[boardIndex].addCard(new _card["default"](true, this.getIdCards(), "Kommentar Holder", phrase, translation, tag));
    }
  }, {
    key:"getBoard",
    value: function getBoard(id){
      return this.boards.filter((board) => {
        return board.id === id;
      });
    }
  }, {
    key:"getBoardId",
    value: function getBoardId(title){
      
      console.log("boardId, getBoardId: ", this.boards.filter((board) => {
        return board.title === title;
      }).id);
      return this.boards.filter((board) => {
        return board.title === title;
      }).id;
    }
  }
  ]);

  return Bank;
}();

exports["default"] = Bank;