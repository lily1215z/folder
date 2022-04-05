import React, {useState} from 'react';
import {Tasks} from "./Components/Tasks";
import {FilterType, TasksType} from "./App";
import {Buttons} from "./Components/Buttons";
import {AddItemForm} from "./Components/AddItemForm";
import {EditMode} from "./Components/EditMode";

type ToDoType = {
    id:string
    title: string
    tasks: Array<TasksType>
    remove: (id: string, todoListId:string)=> void
    changeFilter: (value: FilterType, todoListId:string) => void
    addTask: (title:string, todoListId:string)=> void
    changeStatus: (taskId:string, isDone: boolean,  todoListId:string)=> void
    filter: FilterType
    changeEditMode: (taskId:string, title: string,  todoListId:string) => void
}

export const ToDo:React.FC<ToDoType> = ({
                                            title,
                                            tasks,
                                            remove,
                                            changeFilter,
                                            addTask,
                                            changeStatus,
                                            filter,
                                            id,
                                            changeEditMode
}) => {


    const resultTasks = tasks.map(i=>{
        const changeEditModeWrap = (title: string) => {
            changeEditMode(i.id, title, id)
        }

        return (
            <li key={i.id}
                className={i.isDone ? 'is-done' : ''}
            >
                <input
                    type="checkbox"
                    checked={i.isDone}
                    onChange={(e)=>changeStatus(i.id,e.currentTarget.checked, id)}
                />
                <EditMode title={i.title} changeEditMode={changeEditModeWrap}/>
                <button
                    onClick={()=>remove(i.id, id)}
                >x</button>
            </li>
        )}
    )

    const addTasks = (title: string) => {
        addTask(title, id)
    }

    return (
        <div>
            <div>{title}</div>
            <AddItemForm addTask={addTasks} />

            <Tasks
                resultTasks={resultTasks}
            />
            <Buttons
                id={id}
                changeFilter={changeFilter}
                filter={filter}
            />
        </div>
    );
};
