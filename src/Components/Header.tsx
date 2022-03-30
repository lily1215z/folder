import React, {ChangeEvent, useState} from 'react';

type HeaderType = {
    title: string
    addTask: (title:string)=> void
}

export const Header:React.FC<HeaderType> = ({title, addTask}) => {
    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        setError(null)
    }
    const onClickHandler = () => {
        if(newTitle !== '') {
            addTask(newTitle.trim())
            setNewTitle('')
        } else {
            setError('mistake')
        }
    }

    return (
        <div>
            <div>{title}</div>
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





