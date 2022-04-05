import React, {useState} from 'react';

type EditModeTYpe = {
    title: string
    changeEditMode: (title: string) => void
}

export const EditMode:React.FC<EditModeTYpe> = ({title, changeEditMode}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState(title)

    const activeEditMode = () => {
        setEditMode(true)
    }

    const viewEditMode = () => {
        setEditMode(false)
        changeEditMode(value)
    }

    return (editMode
            ? <input
                value={value}
                autoFocus
                onChange={(e)=>setValue(e.currentTarget.value)}
                onBlur={viewEditMode}
            />
            : <span onDoubleClick={activeEditMode}>{title}</span>
    );
};

