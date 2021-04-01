import { format } from "prettier";
/**
 * Lägger till observers till modellen som uppdaterar databasen när modellens state ändras.
 * Kan behövas separata implementationer för olika delar av modellen. 
 * 
 * 
 * 
 */

export function persistModel(model) {
    let loadingFromFirebase = false;
    let cardNum = 0;
    model.addObserver(() => {
      if (!loadingFromFirebase) {
        setTimeout(() => {
          window.db.collection("tags").doc(model.uid + "").collection(model.currentTag).doc("card" + cardNum).set({ //hårdkodat, måste ändras sen
            phrase: model.currentPhrase,
            translation: model.currentTranslation,
          });
        }, 1000);
      }
    cardNum++;});
  }
