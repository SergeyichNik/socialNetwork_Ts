import React, {Dispatch} from "react";
import {Dialogs} from "./Dialogs";
import {DialogsReducerActionsType, sendMessageAC, updateNewMessageBodyAC} from "../../store/dialogs-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<DialogsReducerActionsType>) => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer