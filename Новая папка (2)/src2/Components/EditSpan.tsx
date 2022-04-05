import React, {useState} from 'react';

type EditSpanType = {
    title: string
    onChange: (newValue: string) => void
}
export const EditSpan: React.FC<EditSpanType> = ({title, onChange}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState('')

    const activateEditMode = () => {
        setEditMode(true)
        setValue(title)
    }

    const activeViewMode = () => {
        setEditMode(false)
        onChange(value)
    }

    return (editMode
            ? <input value={value} autoFocus onBlur={activeViewMode} onChange={(e)=>setValue(e.currentTarget.value)}/>
            : <span onDoubleClick={activateEditMode}>{title}</span>

    );
};

