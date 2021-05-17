export function deleteCardFromBoard(userId, bankId, boardId, cardId){  
    window.db
    .collection("users").doc(String(userId))
    .collection("banks").doc(String(bankId))
    .collection("boards").doc(String(boardId))
    .collection("cards").doc(String(cardId))
    .delete().then(() => {
        
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
        
    }).catch((error) => {
        console.error("Error deleting board: ", error);
    });
}
