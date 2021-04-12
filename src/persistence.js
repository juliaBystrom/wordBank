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
          .set({
            userID: model.userID,
            name: "Fanny"
          });
          
          window.db
          .collection("Users").doc(model.userID)
          .collection("Banks").doc(model.currentBank)
          .set({
            bankID: model.bankID,
            name: "Fanny"
          });

          ;
        }, 1000);
      }
    cardNum++;});
  }

// Firestore data converter
var modelConverter = {
  toFirestore: function(model) {
      return {
          currentBank: model.currentBank,
          observers: model.observers,
          userID: model.userID,
          banks: model.banks,
          languageFrom: model.languageFrom,
          languageTo: model.languageTo,
          sorts: model.sorts
          };
  },
  fromFirestore: function(snapshot, options){
      const data = snapshot.data(options);
      return new Model
      (
        data.currentBank,
        data.observers,
        data.userID,
        data.banks,
        data.languageFrom,
        data.languageTo,
        data.sorts
      );
  }
};

// Set with modelConverter
db.collection("models").doc("user")
  .withConverter(modelConverter)
  .set(new Model("..."));


// class User {
//   constructor (userID, name) {
//     this.userID = userID;  
//     this.name = name;
//   }
// }

// // Firestore data converter
// var userConverter = {
//   toFirestore: function(user) {
//       return {
//           userID: user.userID,
//           name: user.name,
//           };
//   },
//   fromFirestore: function(snapshot, options){
//       const data = snapshot.data(options);
//       return new User(user.userID, user.name);
//   }
// };