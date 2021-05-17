export async function loadFromFirebase(model, uid) {
  var usr = window.db.collection("users").doc(String(uid));

  await usr.get().then((x) => {
    var a = x.data();
    if (a) {
      model.activeBankId = Number(a.activeBankID);
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

          //model.banks[0].reset();
          model.activeBankId = Number(bank.id);
          model.banks[0].activeBankId = bank.id;
          model.banks[0].fromLanguage = bankFromDb.fromLanguage;
          model.banks[0].toLanguage = bankFromDb.toLanguage;

          bankFromDb.tags.forEach((tag) => {
            model.addTag(tag);
          });

          usr
            .collection("banks")
            .doc(String(0))
            .collection("boards")
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((board) => {
                var boardFromDb = board.data();

                if (Number(board.id) > Number(model.boardId)) {
                  model.boardId = Number(board.id);
                }
                model.addBoardFromFirebase(boardFromDb.title, board.id);
                usr
                  .collection("banks")
                  .doc("0")
                  .collection("boards")
                  .doc(board.id)
                  .collection("cards")
                  .get()
                  .then((querySnapshot) => {
                    querySnapshot.forEach((card) => {
                      /*                       
                       */
                      if (Number(card.id) > Number(model.cardId)) {
                        /* console.log(
                          "CardId: ",
                          Number(card.id),
                          " Model.cardId: ",
                          Number(model.cardId)
                        ); */
                        model.cardId = Number(card.id);
                      }
                      /* console.log(
                        "max cardID=",
                        model.cardId,
                        " board: ",
                        boardFromDb.title
                      ); */

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
