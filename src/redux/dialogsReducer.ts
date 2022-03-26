import {v1} from "uuid";
import {
    ActionType,
    DialogsPageType,
    messagesDataType,
} from "./store";

export type UpdateMessageBodyActionType = {
    type: "UPDATE_MESSAGE_BODY",
    text: string
}
export type SendNewMessageActionType = {
    type: "SEND_NEW_MESSAGE"
}

export const sendMessageAC = (): SendNewMessageActionType => {
    return {
        type: "SEND_NEW_MESSAGE"
    }
}
export const updateNewMessageBodyAC = (text: string): UpdateMessageBodyActionType => {
    return {
        type: "UPDATE_MESSAGE_BODY",
        text
    }
}


export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "SEND_NEW_MESSAGE":
            const newMessage: messagesDataType = {
                id: v1(),
                message: state.newMessageBody
            }
            state.messagesData.push(newMessage)
            state.newMessageBody = ''
            return state;
        case "UPDATE_MESSAGE_BODY":
            state.newMessageBody = action.text
            return state;
        default:
            return state
    }
}

export default dialogsReducer;