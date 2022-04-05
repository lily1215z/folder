import React, {ChangeEvent, useState} from 'react';

type AddTodoListFormType = {
    addTask: (title:string, todoListId:string)=> void
    id: string
}
export const AddTodoListForm: React.FC<AddTodoListFormType> = ({addTask, id}) => {
    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        setError(null)
    }
    const onClickHandler = () => {
        if(newTitle !== '') {
            addTask(newTitle.trim(), id)
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

