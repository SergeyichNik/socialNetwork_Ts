import React, {FC} from "react";
import {ActionType, DispatchType, StateType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

type PropsType = {
    store: {
        getState: () => StateType,
        dispatch: (action: ActionType) => void
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
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