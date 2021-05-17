// Observable that continuously saves the entire model in Firestore.

export async function loadFromFirebase(model, uid) {
  var usr = window.db.collection("users").doc(String(uid));

  await usr.get().then((x) => {
    var a = x.data();
    if (a) {
      model.activeBankId = Number(a.activeBankId);
    } else {
      model.activeBankId = 0;
    }
  });

  // Load banks from Firestore
  await usr
    .collection("banks")
    .get()
    .then((querySnapshot) => {
      if (querySnapshot) {
        querySnapshot.forEach((bank) => {
          let bankFromDb = bank.data();
          model.activeBankId = Number(bank.id);
          let activeBank = model.getActiveBank();
          activeBank.activeBankId = bank.id;
          activeBank.fromLanguage = bankFromDb.fromLanguage;
          activeBank.toLanguage = bankFromDb.toLanguage;

          bankFromDb.tags.forEach((tag) => {
            model.addTag(tag);
          });

          // Load boards from Firestore
          usr
            .collection("banks")
            .doc(String(model.activeBankId))
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
                  .collection("banks").doc(String(model.activeBankId))
                  .collection("boards").doc(board.id)
                  .collection("cards").get()
                  .then((querySnapshot) => {
                    querySnapshot.forEach((card) => {
                      if (Number(card.id) > Number(model.cardId)) {
                        model.cardId = Number(card.id);
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
