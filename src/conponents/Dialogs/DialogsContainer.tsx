import React, {FC} from "react";
import {ActionType, StateType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";

type PropsType = {
    store: {
        getState: () => StateType,
        dispatch: (action: ActionType) => void
    }
}



export const DialogsContainer: FC<PropsType> = ({store}) => {
    const state = store.getState()

    const updateNewMessageBody = (text: string) => {

        store.dispatch(updateNewMessageBodyAC(text))
    }

    const sendMessage = () => {
        store.dispatch(sendMessageAC())
    }

    return <Dialogs dialogsPage={state.dialogsPage}
                    sendMessage={sendMessage}
                    updateNewMessageBody={updateNewMessageBody}/>
}