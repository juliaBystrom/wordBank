export function deleteCardFromBoard(userId, bankId, cardId, boardId){  
    window.db
    .collection("users").doc(String(userId))
    .collection("banks").doc(String(bankId))
    .collection("boards").doc(String(boardId))
    .collection("cards").doc(String(cardId))
    .delete().then(() => {
        console.log("Card successfully deleted!");
    }).catch((error) => {
        console.error("Error deleting card: ", error);
    });
}

export function deleteBoard(userId, bankId, boardId){  
    window.db
    .collection("users").doc(String(userId))
    .collection("banks").doc(String(bankId))
    .collection("boards").doc(String(boardId))
    .delete().then(() => {
        console.log("Board successfully deleted!");
    }).catch((error) => {
        console.error("Error deleting board: ", error);
    });
}
