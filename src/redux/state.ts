export type stateType = {
    dialogsPage: {
        dialogsData: dialogsDataType[],
        messagesData: messagesDataType[]
    },
    profilePage: {
        newPostMessage: string,
        postData: postDataType[]
    }
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
    id: number
    message: string
}

// let rerenderEntireTree = (state: any) => {
//     console.log('state')
// }

// const state = {
//     profilePage: {
//         postData: [
//             {id: 0, message: 'my first post', likesCount: 12},
//             {id: 1, message: 'my second post', likesCount: 5},
//             {id: 2, message: 'my third post', likesCount: 11},
//         ],
//         newPostMessage: ''
//     },
//     dialogsPage: {
//         dialogsData: [
//             {
//                 id: 0,
//                 name: 'Dima',
//                 avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
//             },
//             {id: 1, name: 'Sveta', avatar: 'https://cdn.pixabay.com/photo/2021/01/04/10/37/icon-5887113_1280.png'},
//             {id: 2, name: 'Frida', avatar: 'https://cdn.pixabay.com/photo/2021/01/04/10/37/icon-5887113_1280.png'},
//             {
//                 id: 3,
//                 name: 'John',
//                 avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
//             },
//             {
//                 id: 4,
//                 name: 'Ruso',
//                 avatar: 'https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
//             }
//         ],
//         messagesData: [
//             {id: 0, message: 'Dima1'},
//             {id: 1, message: 'Sveta2'},
//             {id: 2, message: 'Frida3'},
//             {id: 3, message: 'John4'},
//             {id: 4, message: 'Ruso5'}
//         ]
//     }
// }

// export const setNewPostMessage = (text: string) => {
//     state.profilePage.newPostMessage = text
//
// }

// export const addPost = () => {
//     let newPost = {
//         id: Math.random(),
//         message: state.profilePage.newPostMessage,
//         likesCount: 0
//     }
//     state.profilePage.postData.push(newPost);
//     state.profilePage.newPostMessage = '';
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer
// }

// export default state;

export const store = {
    state: {
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
                {id: 0, message: 'Dima1'},
                {id: 1, message: 'Sveta2'},
                {id: 2, message: 'Frida3'},
                {id: 3, message: 'John4'},
                {id: 4, message: 'Ruso5'}
            ]
        }
    },

    rerenderEntireTree (state: any) {
        console.log('state')
    },

    setNewPostMessage(text: string) {
        this.state.profilePage.newPostMessage = text

    },

    addPost () {
        let newPost = {
            id: Math.random(),
            message: this.state.profilePage.newPostMessage,
            likesCount: 0
        }
        this.state.profilePage.postData.push(newPost);
        this.state.profilePage.newPostMessage = '';
        this.rerenderEntireTree(this.state)
    },

    subscribe (observer: any) {
        this.rerenderEntireTree = observer
    },

}

