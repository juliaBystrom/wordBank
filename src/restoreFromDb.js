import Bank from "./models/bank";
import Board from "./models/board";

export function restoreFromDb(model) {
    
    var usr = window.db.collection("users").doc(String(model.userId));


// Restore banks from db
usr
.collection("banks")
.get()
.then((querySnapshot) => {
  querySnapshot.forEach((bank) => {
    console.log("Restore bank.id: ", bank.id);
    console.log("Restore bank: ", bank.data());
    var bankFromDb = bank.data();
    model.banks = [new Bank(bank.id), ...model.banks];
    //model.addBank(Number(doc.id));

    var bankObj = model.banks[0];

    console.log("model.banks", model.banks);
    console.log("model.banks[0]", model.banks[0]);
    bankObj.languageFrom = bankFromDb.languageFrom;
    bankObj.languageTo = bankFromDb.languageTo;
    bankObj.tags = bankFromDb.tags;
    bankObj.activeBankId = bank.id;
    model.notifyObservers();

    // Restore boards from db
    usr
      .collection("banks")
      .doc(bank.id)
      .collection("boards")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((board) => {
          console.log("Restore board.id: ", board.id);
          console.log("Restore board: ", board.data());
          // doc.data() is never undefined for query doc snapshots
          //console.log(board.id, " => ", board.data());
          var boardFromDb = board.data();
          //model.addBoardVer2(Number(board.id), boardFromDb.title);
          console.log("boardFromDb",boardFromDb);
          model.banks[0].boards = [
            new Board(boardFromDb.title, board.id),
            ...model.banks[0].boards,
          ];
          console.log("model.banks[0].boards", model.banks[0].boards);
          console.log("model.banks[0]", model.banks[0]);
          model.notifyObservers();
        });
      });
  });
});
}