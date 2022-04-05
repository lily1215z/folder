import React, {useState} from 'react';
import {Header} from "./Components/Header";
import {Buttons} from "./Components/Buttons";
import {Tasks} from "./Components/Tasks";
import {FilterType, TasksType} from "./App";
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
    changeValue: (taskId:string, value: string,  todoListId:string) => void
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
                                            changeValue
}) => {

    const resultTasks = tasks.map(i=>{

        const onChange = (value: string) => {
            changeValue(i.id, value, id)
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
                <EditMode title={i.title} onChange={onChange}/>
                <button
                    onClick={()=>remove(i.id, id)}
                >x</button>
            </li>
        )}
    )

    return (
        <div>
            <Header
                id={id}
                title={title}
                addTask={addTask}
            />
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
