import {WordBankModel} from "./models/wordBankModel";

/**
 * Lägger till Observers till modellen som uppdaterar databasen när modellens state ändras.
 * Kan behövas separata implementationer för olika delar av modellen. 
 */

 export function persistence(model) {
  // Firestore data converter
  var modelConverter = {
    toFirestore: function(model) {
        return {
            currentBank: model.currentBank,
            userID: model.userID,
            languageFrom: model.languageFrom,
            languageTo: model.languageTo,
            banks: model.banks.map(bank => { 
              var id = bank.bankID; 
              return {id: bank}
            })
            };

    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new WordBankModel
        (
          data.currentBank,
          data.userID,
          data.languageFrom,
          data.languageTo,
        );
    }
  };

    let loadingFromFirebase = false;
    let cardNum = 0;
    model.addObserver(() => {
      if (!loadingFromFirebase) {
        setTimeout(() => {
          window.db
            .collection("models").doc("123")
            .withConverter(modelConverter)
            .set(model)
            /* .then(() => {
              model.banks.forEach((bank) => {
                window.db
                .collection("models").doc("123")
                .collection("banks").doc(String(bank.bankID))
                .set({
                  languageFrom: bank.languageFrom,
                  languageTo: bank.languageTo,
                  });
                  
                  bank.boards.forEach((board) =>{
                    window.db
                    .collection("models").doc("123")
                    .collection("banks").doc(String(bank.bankID))
                    .collection("boards").doc(board.boardID)
                    .set({
                      title: board.title
                      })
                  })
              }) 
              }) */
        }, 1000);
      }
    });    
  }


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