export async function loadFromFirebase(model, uid) {
  var usr = window.db.collection("users").doc(String(uid));

  await usr.get().then((x) => {
    var a = x.data();
    if (a) {
      model.activeBankId = Number(a.activeBankID);
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

          model.banks[0].reset();
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
                      model.banks[0].notifyObservers();
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
