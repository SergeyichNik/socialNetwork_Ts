import classes from "../../Dialogs.module.css";
import {messagesDataType,} from "../../../../redux/store";
import {ChangeEvent, FC} from "react";
import {Message} from "../Message";

type PropsType = {
    messagesData: messagesDataType[]
    value: string
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}

export const MessageArea: FC<PropsType> = (props) => {
    const {messagesData, value, sendMessage, updateNewMessageBody} = props

    const messagesMap = messagesData.map(item => <Message key={item.id} message={item.message} id={item.id}/>)

    const onClickHandler = () => {
        sendMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateNewMessageBody(e.currentTarget.value)
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