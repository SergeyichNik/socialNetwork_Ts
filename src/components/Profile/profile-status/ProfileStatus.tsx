import {useState} from 'react';


export const ProfileStatus = ({value}: { value: string }) => {

    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    if (editMode) {
        return <div>
            <input autoFocus onBlur={toggleEditMode} value={value}/>
        </div>
    }

    return <div>
        <span  onDoubleClick={toggleEditMode}>{value}</span>
    </div>
};
