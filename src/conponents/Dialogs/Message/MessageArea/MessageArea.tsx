import classes from "../../Dialogs.module.css";


export const MessageArea = () => {
    return (
        <div className={classes.messageArea}>
            <div className={classes.messages}>messages</div>
            <div className={classes.input}>
                <input/>
                <button>Send</button>
            </div>
        </div>
    )
}