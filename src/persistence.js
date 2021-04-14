import {WordBankModel} from "./models/wordBankModel";

/**
 * Lägger till Observers till modellen som uppdaterar databasen när modellens state ändras.
 * Kan behövas separata implementationer för olika delar av modellen. 
 */

 export function persistence(model) {

    let loadingFromFirebase = false;
    let cardNum = 0;
    model.addObserver(() => {
      if (!loadingFromFirebase) {
        setTimeout(() => {
          window.db
            .collection("users").doc(String(model.userID))
            .set({activeBankID: String(model.currentBank)})
            .then(model.banks.forEach(bank=>{
              window.db
              .collection("users").doc(String(model.userID))
              .collection("banks").doc(String(bank.bankID))
              .set({
                  languageFrom: bank.languageFrom,
                  languageTo: bank.languageTo,
                  tags: bank.tags.map((tag)=> {return String(tag.tag)})
              })
            }))
        }, 1000);
      }
    }); 

  }