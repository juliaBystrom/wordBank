import Bank from "./models/bank";
import Board from "./models/board";
import Card from "./models/card";


export function loadFromFirebase(model) {
  var db = window.db.collection("users").doc(String(model.userId));

  loadModelFromFirebase(db, model);
}

// Restore model from db.
export function loadModelFromFirebase(db, model){
  db.get().then((user)=>{
    var loadModel = user.data();
    if(loadModel){
      model.setCurrentBank(loadModel.activeBankId);
      model.setKeyBanks(loadModel.keyCountBanks);
      model.setKeyBoards(loadModel.keyCountBoards);
    } else { model.setCurrentBank(0) }
  })

  loadBanksFromFirebase(db, model);
}

// Restore banks from db.
export function loadBanksFromFirebase(db, model){
  // model.banks = [];
  db.collection("banks").get().then((querySnapshot) => {
    if(querySnapshot){
      querySnapshot.forEach((bank) => {
        // Load bank from db and add to model.
        var bankFromDb = bank.data();
        model.addBank(bank.id);

        // Access current loading bank in model to edit properties.
        var id = bank.id;
        var loadingBank = model.banks[model.getBankIndex(model.getBankById(id))];
        loadingBank.languageFrom = bankFromDb.languageFrom;
        loadingBank.languageTo = bankFromDb.languageTo;
        bankFromDb.tags.forEach(tag => {
          model.addTag(tag);
        })

        loadBoardsFromFirebase(db, model, loadingBank);
      })
    }
  })
}

// Restore boards from db
export function loadBoardsFromFirebase(db, model, loadingBank){

  db.collection("banks").doc(loadingBank.id)
    .collection("boards").get().then((querySnapshot) => {
      if(querySnapshot){
        querySnapshot.forEach((board) => {
          var boardFromDb = board.data();
          loadingBank.addBoard(loadingBank.id, board.id, boardFromDb.title);
          var id = board.id;
          var loadingBoard = loadingBank.boards[loadingBank.getBoardIndex(loadingBank.getBoardById(id))];
          model.notifyObservers();
          loadCardsFromFirebase(db, model, loadingBank, loadingBoard);
        })
      }
    })

}

export function loadCardsFromFirebase(db, model, loadingBank, loadingBoard){
  db.collection("banks").doc(loadingBank.id)
  .collection("boards").doc(loadingBoard.id)
  .collection("cards").get()
  .then((querySnapshot) => {
    if(querySnapshot){
      querySnapshot.forEach((card) => {
        var cardFromDb = card.data();
        loadingBoard.addCard(new Card(card.id, cardFromDb.comment, cardFromDb.leftSentence, cardFromDb.rightSentence, cardFromDb.tag));
        model.notifyObservers();
      });
    }
  });
}
            