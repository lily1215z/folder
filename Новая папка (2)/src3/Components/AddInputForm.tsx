import React, {ChangeEvent, useState} from 'react';

type AddInputFormType = {
    id: string
    addTask: (title: string, todoListId: string) => void
}

export const AddInputForm = (props: AddInputFormType) => {
    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        setError(null)
    }
    const onClickHandler = () => {
        if(newTitle.trim() !== '') {
            props.addTask(newTitle.trim(), props.id)
            setNewTitle('')
        } else {
            setError('mistake')
        }
    }

    return (
        <div>
            <input
                onKeyPress={(e)=> e.key === 'Enter' && onClickHandler()}
                className={error ? 'error' : ''}
                onChange={onChangeHandler}
                value={newTitle}
            />
            <button
                onClick={onClickHandler}
            >+</button>
            {error && <div className='misstake'>{error}</div>}
        </div>
    );
};

