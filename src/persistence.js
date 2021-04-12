import { format } from "prettier";
/**
 * Lägger till Observers till modellen som uppdaterar databasen när modellens state ändras.
 * Kan behövas separata implementationer för olika delar av modellen. 
 * 
 * 
 * 
 */

export function persistence(model) {
    let loadingFromFirebase = false;
    let cardNum = 0;
    model.addObserver(() => {
      if (!loadingFromFirebase) {
        setTimeout(() => {
          window.db
          .collection("Users").doc(model.userID)
          .collection("Banks").doc(model.banks[0])
          .set({ //hårdkodat, måste ändras sen
            phrase: model.currentPhrase,
            translation: model.currentTranslation,
          });
        }, 1000);
      }
    cardNum++;});
  }