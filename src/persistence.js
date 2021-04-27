import { WordBankModel } from "./models/wordBankModel";

/**
 * Lägger till Observers till modellen som uppdaterar databasen när modellens state ändras.
 * Kan behövas separata implementationer för olika delar av modellen.
 */

export function persistence(model) {
  let loadingFromFirebase = false;
  let cardNum = 0;
  model.addObserver(() => {
    if (!loadingFromFirebase) {
      setTimeout(() => {
        window.db
          .collection("users")
          .doc(String(model.userId))
          .set({ activeBankId: String(model.activeBankId) })
          .then(
            model.banks.forEach((bank) => {
              window.db
                .collection("users")
                .doc(String(model.userId))
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
                    window.db
                      .collection("users")
                      .doc(String(model.userId))
                      .collection("banks")
                      .doc(String(bank.id))
                      .collection("boards")
                      .doc(String(board.id))
                      .set({ title: board.title })

                      .then(
                        board.cards.forEach((card) => {
                          window.db
                            .collection("users")
                            .doc(String(model.userId))
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
