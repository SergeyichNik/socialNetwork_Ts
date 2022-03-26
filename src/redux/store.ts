
import profileReducer, {AddPostActionType, UpdatePostActionType} from "./profileReducer";
import dialogsReducer, {SendNewMessageActionType, UpdateMessageBodyActionType} from "./dialogsReducer";

export type DialogsPageType = {
    dialogsData: dialogsDataType[],
    messagesData: messagesDataType[],
    newMessageBody: string
}
export type ProfilePageType = {
    newPostMessage: string,
    postData: postDataType[]
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
export type postDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type dialogsDataType = {
    id: number,
    name: string,
    avatar: string
}
export type messagesDataType = {
    id: string
    message: string
}

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType =
    AddPostActionType | UpdatePostActionType |
    UpdateMessageBodyActionType | SendNewMessageActionType

export const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 0, message: 'my first post', likesCount: 12},
                {id: 1, message: 'my second post', likesCount: 5},
                {id: 2, message: 'my third post', likesCount: 11},
            ],
            newPostMessage: ''
        },
        dialogsPage: {
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
    },

    getState() {
        return this._state
    },

    _callSubscriber(state: any) {
        console.log('state')
    },

    subscribe (observer: any) {
        this._callSubscriber = observer
    },

    dispatch (action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }

}


