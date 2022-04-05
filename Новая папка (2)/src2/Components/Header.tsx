import React, {ChangeEvent, useState} from 'react';
import {AddTodoForm} from "./AddTodoForm";

type HeaderType = {
    id: string
    title: string
    addTask: (title: string, todoListId: string) => void
}

export const Header: React.FC<HeaderType> = ({title, addTask, id}) => {

    const addTasks = (title: string) => {
        addTask(title, id)
    }
    return (
        <div>
            <div>{title}</div>
            <AddTodoForm addItem={addTasks}/>
        </div>
    );
};





