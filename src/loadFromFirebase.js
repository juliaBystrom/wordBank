import Bank from "./models/bank";
import Board from "./models/board";
import Card from "./models/card";

// export function loadBanksFromFirebase(){
//   var usr = window.db.collection("users").doc(String(model.userId));

//   usr
//   .collection("banks")
//   .get()
//   .then((querySnapshot) => {
//     var banks = []
//     querySnapshot.forEach((bank) => {
//       banks.append(bank.data());
//       if(banks){
//         return banks;
//       }
//     })
//   })
// }

export async function loadFromFirebase(model) {
  var usr = window.db.collection("users").doc(String(model.userId));

  await usr.get().then((x) => {
    var a = x.data();
    if (a) {
      model.activeBankId = a.activeBankId;
      model.keyCountBanks = a.keyCountBanks;
      model.keyCountBoards = a.keyCountBoards;
    } else {
      model.activeBankId = 0;
    }
  });

  // Restore banks from db
  await usr
    .collection("banks")
    .get()
    .then((querySnapshot) => {
      if (querySnapshot) {
        model.banks = [];
        querySnapshot.forEach((bank) => {
          let bankFromDb = bank.data();

          model.banks = [new Bank(bank.id)];
          model.banks[0].activeBankId = bank.id;
          model.banks[0].languageFrom = bankFromDb.languageFrom;
          model.banks[0].languageTo = bankFromDb.languageTo;

          bankFromDb.tags.forEach((tag) => {
            model.addTag(tag);
          });

          usr
            .collection("banks")
            .doc(bank.id)
            .collection("boards")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((board) => {
                var boardFromDb = board.data();

                model.addBoard(boardFromDb.title);
                console.log(model.banks[0].boards);
                usr
                  .collection("banks")
                  .doc(bank.id)
                  .collection("boards")
                  .doc(board.id)
                  .collection("cards")
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.forEach((card) => {
                      var cardFromDb = card.data();
                      model.createCard(
                        cardFromDb.leftSentence,
                        cardFromDb.rightSentence,
                        0,
                        cardFromDb.tag
                      );

                      model.notifyObservers();
                    });
                  });
              });
            });
        });
      } else {
        return;
      }
    });
}
