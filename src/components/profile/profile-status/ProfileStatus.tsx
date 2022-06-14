import {ChangeEvent, useMemo, useState} from 'react';


export const ProfileStatus =
    ({
         status,
         updateUserStatus,
         isOwner,
     }: {
        status: string,
        updateUserStatus: (status: string) => void,
        isOwner: boolean,
    }) => {

        const [editMode, setEditMode] = useState(false)
        const [value, setValue] = useState(status)

        useMemo(() => {
            setValue(status)
        }, [status])

        const enableEditMode = () => {
            setEditMode(true)
        }

        const disableEditMode = () => {
            setEditMode(false)
            updateUserStatus(value)
        }

        const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
        }

        if (editMode && isOwner) {
            return <div>
                <input autoFocus onBlur={disableEditMode} onChange={onChangeValue} value={value}/>
            </div>
        }

        return <div>
            <span onDoubleClick={enableEditMode}>Status: {status}</span>
        </div>
    };
