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
      model.activeBankId = Number(a.activeBankId);
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
        querySnapshot.forEach((bank) => {
          let bankFromDb = bank.data();

          model.banks = [new Bank(Number(bank.id))];
          model.activeBankId = Number(bank.id);
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
              let maxBoardId = 0;
              querySnapshot.forEach((board) => {
                var boardFromDb = board.data();

                if (Number(board.id) > Number(maxBoardId)) {
                  model.boardId = board.id;
                  maxBoardId = board.id;
                }
                model.addBoardFromFirebase(boardFromDb.title, board.id);
                usr
                  .collection("banks")
                  .doc(bank.id)
                  .collection("boards")
                  .doc(board.id)
                  .collection("cards")
                  .get()
                  .then((querySnapshot) => {
                    let maxCardId = 0;
                    querySnapshot.forEach((card) => {
                      if (Number(card.id) > Number(maxCardId)) {
                        model.cardId = card.id;
                        maxCardId = card.id;
                      }
                      var cardFromDb = card.data();
                      model.createCardFromFirebase(
                        cardFromDb.leftSentence,
                        cardFromDb.rightSentence,
                        Number(board.id),
                        cardFromDb.tag,
                        Number(card.id)
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
