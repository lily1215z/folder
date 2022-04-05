import React, {ChangeEvent, useState} from 'react';
import {AddTodoListForm} from "./AddTodoListForm";

type HeaderType = {
    id:string
    title: string
    addTask: (title:string, todoListId:string)=> void
}

export const Header:React.FC<HeaderType> = ({title, addTask, id}) => {

    return (
        <div>
            <div>{title}</div>
            <AddTodoListForm addTask={addTask} id={id} />
        </div>
    );
};





