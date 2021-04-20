/**
 * Lägger till Observers till modellen som uppdaterar databasen när modellens state ändras.
 * Kan behövas separata implementationer för olika delar av modellen.
 */

import Bank from "./models/bank";
import Board from "./models/board";
import Card from "./models/card";

export function persistence(model) {
  let loadingFromFirebase = true;
  var usr = window.db.collection("users").doc(String(model.userId));

  // Save to Firestore
  model.addObserver(() => {
    if (!loadingFromFirebase) {
      setTimeout(() => {
        usr
          .set({ activeBankId: String(model.activeBankId) })

          .then(
            model.banks.forEach((bank) => {
              console.log(bank);
              usr
                .collection("banks")
                .doc(String(bank.id))
                .set({
                  languageFrom: bank.languageFrom,
                  languageTo: bank.languageTo,
                  tags: bank.tags.map((tag) => {
                    return String(tag.name);
                  }),
                })

                .then(
                  bank.boards.forEach((board) => {
                    usr
                      .collection("banks")
                      .doc(String(bank.id))
                      .collection("boards")
                      .doc(String(board.id))
                      .set({ title: board.title })

                      .then(
                        board.cards.forEach((card) => {
                          usr
                            .collection("banks")
                            .doc(String(bank.id))
                            .collection("boards")
                            .doc(String(board.id))
                            .collection("cards")
                            .doc(String(card.id))
                            .set({
                              leftSentence: card.leftSentence,
                              rightSentence: card.rightSentence,
                              tag: card.tag,
                              comment: card.comment,
                            });
                        })
                      );
                  })
                );
            })
          );
      }, 1000);
    }
  });

  // Restore banks from db
  usr
    .collection("banks")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(bank.id, " => ", bank.data());
        var bankFromDb = doc.data();
        //model.banks = [new Bank(bank.id), ...model.banks];
        model.addBank(Number(doc.id));

        var bankObj = model.banks[0];

        console.log(model.banks[0]);
        //console.log("model.banks[0]", model.banks[0]);
        bankObj.languageFrom = bankFromDb.languageFrom;
        bankObj.languageTo = bankFromDb.languageTo;
        bankObj.tags = bankFromDb.tags;
        loadingFromFirebase = true;
        model.setCurrentBank(Number(doc.id));

        // Restore boards from db
        usr
          .collection("banks")
          .doc(doc.id)
          .collection("boards")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((board) => {
              // doc.data() is never undefined for query doc snapshots
              //console.log(board.id, " => ", board.data());
              var boardFromDb = board.data();
              model.addBoardVer2(Number(board.id), boardFromDb.title);
              console.log(boardFromDb);
              /*model.banks[0].boards = [
                new Board(board.id, board.title),
                ...model.banks[0].boards,
              ];
              
              console.log("model.banks[0].boards[0]", model.banks[0].boards[0]);
              */
            });
          });
      });
    });
}
