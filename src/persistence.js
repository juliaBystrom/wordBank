import {WordBankModel} from "./models/wordBankModel";

/**
 * Lägger till Observers till modellen som uppdaterar databasen när modellens state ändras.
 * Kan behövas separata implementationer för olika delar av modellen. 
 */

 export function persistence(model) {

    let loadingFromFirebase = false;
    let cardNum = 0;
    model.addObserver(() => {
      if (!loadingFromFirebase) { setTimeout(() => {
        window.db
        .collection("users").doc(String(model.userID))
        .set({ activeBankID: String(model.currentBank) })
        .then(model.banks.forEach(bank=>{
            window.db
            .collection("users").doc(String(model.userID))
            .collection("banks").doc(String(bank.bankID))
            .set({
              languageFrom: bank.languageFrom,
              languageTo: bank.languageTo,
              tags: bank.tags.map((tag)=> {return String(tag.tag)}) 
            })
            .then(bank.boards.forEach(board=>{
                window.db
                .collection("users").doc(String(model.userID))
                .collection("banks").doc(String(bank.bankID))
                .collection("boards").doc(String(board.boardID))
                .set({ title: board.title })
            
              .then(board.cards.forEach(card=>{
                  window.db
                  .collection("users").doc(String(model.userID))
                  .collection("banks").doc(String(bank.bankID))
                  .collection("boards").doc(String(board.boardID))
                  .collection("cards").doc(String(card.cardID))
                  .set({
                    leftSentence: card.leftSentence,
                    rightSentence: card.rightSentence,
                    // tag & comment are "undefined" right now. Why? Both are set in testing?
                    // tag: card.givenTag, 
                    // comment: card.comment
                })
              }))
            
            }))
          }))
        }, 1000);
      }
    }); 
  }