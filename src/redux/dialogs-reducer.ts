import {v1} from "uuid";





const initialState: DialogsPageType = {
    dialogsData: [
        {
            id: 0,
            name: 'Dima',
            avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
        },
        {id: 1, name: 'Sveta', avatar: 'https://cdn.pixabay.com/photo/2021/01/04/10/37/icon-5887113_1280.png'},
        {id: 2, name: 'Frida', avatar: 'https://cdn.pixabay.com/photo/2021/01/04/10/37/icon-5887113_1280.png'},
        {
            id: 3,
            name: 'John',
            avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
        },
        {
            id: 4,
            name: 'Ruso',
            avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
        }
    ],
    messagesData: [
        {id: '0', message: 'Dima1'},
        {id: '1', message: 'Sveta2'},
        {id: '2', message: 'Frida3'},
        {id: '3', message: 'John4'},
        {id: '4', message: 'Ruso5'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action: DialogsReducerActionsType) => {
    switch (action.type) {
        case "SEND_NEW_MESSAGE":
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageBody
            }
            state = {...state, messagesData: [...state.messagesData, newMessage]}
            state.newMessageBody = ''
            return state;
        case "UPDATE_MESSAGE_BODY":
            return state = {...state, newMessageBody: action.text}
        default:
            return state
    }
}

//actions creators
export const sendMessageAC = () => {
    return {
        type: "SEND_NEW_MESSAGE"
    } as const
}
export const updateNewMessageBodyAC = (text: string) => {
    return {
        type: "UPDATE_MESSAGE_BODY",
        text
    } as const
}
//types

export type DialogsReducerActionsType =
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type DialogsPageType = {
    dialogsData: DialogsUserType[],
    messagesData: MessageType[],
    newMessageBody: string,
}

type DialogsUserType = {
    id: number,
    name: string,
    avatar: string,
}

type MessageType = {
    id: string,
    message: string,
}

