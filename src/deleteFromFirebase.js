export function deleteCardFromBoard(userId, cardId, boardId){  
    window.db
    .collection("users").doc(String(userId))
    .collection("banks").doc("0")
    .collection("boards").doc(String(boardId))
    .collection("cards").doc(String(cardId))
    .delete().then(() => {
        console.log("Card successfully deleted!");
    }).catch((error) => {
        console.error("Error deleting card: ", error);
    });
}

export function deleteBoard(userId, boardId){  
    window.db
    .collection("users").doc(String(userId))
    .collection("banks").doc("0")
    .collection("boards").doc(String(boardId))
    .delete().then(() => {
        console.log("Board successfully deleted!");
    }).catch((error) => {
        console.error("Error deleting board: ", error);
    });
}
