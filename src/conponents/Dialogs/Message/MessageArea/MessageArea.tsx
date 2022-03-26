import classes from "../../Dialogs.module.css";
import {ActionType, messagesDataType,} from "../../../../redux/store";
import {ChangeEvent, FC} from "react";
import {Message} from "../Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../../redux/dialogsReducer";

type PropsType = {
    messagesData: messagesDataType[]
    dispatch: (action: ActionType) => void
    value: string
}

export const MessageArea: FC<PropsType> = ({messagesData, dispatch, value}) => {
    const messagesMap = messagesData.map(item => <Message message={item.message} id={item.id}/>)

    const onClickHandler = () => {
        dispatch(sendMessageAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    return (
        <div className={classes.messageArea}>
            <div className={classes.messages}>
                {messagesMap}
            </div>
            <div className={classes.input}>
                <input placeholder={'Enter your message...'}
                       onChange={onChangeHandler}
                       value={value}/>
                <button onClick={onClickHandler}>Send</button>
            </div>
        </div>
    )
}