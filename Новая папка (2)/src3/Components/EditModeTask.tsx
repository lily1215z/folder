import React, {ChangeEvent, useState} from 'react';

type EditModeTaskType = {
    title: string
    onChange: (title: string) => void
}
export const EditModeTask: React.FC<EditModeTaskType> = ({title, onChange}) => {
    const [value, setValue] = useState<string>(title)
    const [editMode, setEditMode] = useState<boolean>(false)

    const editValue = () => {
        setEditMode(true)
        setValue(title)
    }
    const viewValue = () => {
        setEditMode(false)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const v = e.currentTarget.value
        setValue(v)
        onChange(v)
    }
    return (editMode
            ? <input value={value} onChange={changeTitle} autoFocus onBlur={viewValue} />
            : <span onDoubleClick={editValue}>{title}</span>
    );
};
