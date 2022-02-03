import classes from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Dima</div>
                <div className={classes.dialog}>Andrey</div>
                <div className={classes.dialog}>Pavel</div>
                <div className={classes.dialog}>Viktor</div>
                <div className={classes.dialog}>Valera</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Fine</div>
                <div className={classes.message}>Where are you</div>
                <div className={classes.message}>At home</div>
                <div className={classes.message}>Good!</div>
            </div>

        </div>
    )
}