import React, {useState} from 'react';

type EditModeType = {
    title: string
    onChange: (value: string) => void
}
export const EditMode = (props: EditModeType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.title)

    const activeView = () => {
        setEditMode(true)
        // setValue(value)
    }

    const startView = () => {
        setEditMode(false)
    }

    return ( editMode
            ? <input
                value={value}
                onChange={(e)=>props.onChange(e.currentTarget.value)}
                onBlur={startView}
                autoFocus />
            : <span onDoubleClick={activeView}>{props.title}</span>
    );
};

