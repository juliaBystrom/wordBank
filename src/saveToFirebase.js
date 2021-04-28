/**
 * Lägger till Observers till modellen som uppdaterar databasen när modellens state ändras.
 * Kan behövas separata implementationer för olika delar av modellen.
 */

export function saveToFirebase(model) {
  let loadingFromFirebase = true;
  var usr = window.db.collection("users").doc(String(model.userId));

  // Save to Firestore
  model.addObserver(() => {
    if (true) {
      setTimeout(() => {
        usr
          .set({
            activeBankId: model.activeBankId,
          })

          .then(
            model.banks.forEach((bank) => {
              usr
                .collection("banks")
                .doc(String(bank.id))
                .set({
                  languageFrom: bank.languageFrom,
                  languageTo: bank.languageTo,
                  tags: bank.tags.map((tag) => {
                    return tag.name;
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
}
