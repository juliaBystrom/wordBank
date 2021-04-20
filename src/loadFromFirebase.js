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


export function loadFromFirebase(model) {
  console.log("Model arg: ", model);
 
  var usr = window.db.collection("users").doc(String(model.userId));

  usr
  .get()
  .then((x)=>{
    var a = x.data();
    if(a){
      console.log("test", a.activeBankId);
      model.activeBankId = a.activeBankId;
      model.keyCountBanks = a.keyCountBanks;
      model.keyCountBoards = a.keyCountBoards;
    } else {
      model.activeBankId = 0;
    }

  })

  console.log("Model activeBankId: ", model);
  // Restore banks from db
  usr
  .collection("banks")
  .get()
  .then((querySnapshot) => {
    if(querySnapshot){
      model.banks = [];
      querySnapshot.forEach((bank) => {
        console.log("Restore bank.id: ", bank.id);
        console.log("Restore bank: ", bank.data());
        var bankFromDb = bank.data();
        model.banks = [new Bank(bank.id), ...model.banks];

        console.log("model.banks", model.banks);
        console.log("model.banks[0]", model.banks[0]);
        model.banks[0].languageFrom = bankFromDb.languageFrom;
        model.banks[0].languageTo = bankFromDb.languageTo;
        bankFromDb.tags.forEach(tag => {
          model.addTag(tag);
        });

        model.banks[0].activeBankId = bank.id;
        console.log("Model banks: ", model);
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
                new Board(boardFromDb.title, String(board.id)),
                ...model.banks[0].boards,
              ];
              console.log("model.banks[0].boards", model.banks[0].boards);
              console.log("model.banks[0]", model.banks[0]);
              model.notifyObservers();

              console.log("Model boards: ", model);
            
          usr
          .collection("banks")
          .doc(bank.id)
          .collection("boards")
          .doc(board.id)
          .collection("cards")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((card) => {
              console.log("Restore card.id: ", card.id);
              console.log("Restore card: ", card.data());
              // doc.data() is never undefined for query doc snapshots
              //console.log(board.id, " => ", board.data());
              var cardFromDb = card.data();
              //model.addBoardVer2(Number(board.id), boardFromDb.title);
              console.log("cardFromDb",cardFromDb);
              model.banks[0].boards[0].cards = [
                new Card(card.id, cardFromDb.comment, cardFromDb.leftSentence, cardFromDb.rightSentence, cardFromDb.tag),
                ...model.banks[0].boards[0].cards,
              ];
              console.log("model cards", model.banks[0].boards[0].cards);
              model.notifyObservers();
              //id, commentOnS, leftS, rightS, tag
              console.log("Model boards: ", model);
            });
          });
          
          });
          })
          
      });
    }else{
      return;
    }

  });
};