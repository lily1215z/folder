import React, {ChangeEvent, useState} from 'react';
import {AddInputForm} from "./AddInputForm";

type HeaderType = {
    id:string
    title: string
    addTask: (title:string, todoListId:string)=> void
}

export const Header:React.FC<HeaderType> = ({title, addTask, id}) => {

    return (
        <div>
            <div>{title}</div>

           <AddInputForm id={id} addTask={addTask} />

        </div>
    );
};





