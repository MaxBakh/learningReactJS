export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});


// export const addMessageBOT = () => {
//     if (
//         messageList.length && messageList[messageList.length - 1].author !== authors.BOT
//     ) {
//         setTimeout(() => {
//             setMessageList(currentMessageList => ([...currentMessageList, { author: authors.BOT, text: "Hello Friend" }]))
//         }, 1500)
//     }
// }