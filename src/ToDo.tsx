import React, {useState} from 'react';
import {Header} from "./Components/Header";
import {Buttons} from "./Components/Buttons";
import {Tasks} from "./Components/Tasks";
import {FilterType, TasksType} from "./App";

type ToDoType = {
    id:string
    title: string
    tasks: Array<TasksType>
    remove: (id: string, todoListId:string)=> void
    changeFilter: (value: FilterType, todoListId:string) => void
    addTask: (title:string, todoListId:string)=> void
    changeStatus: (taskId:string, isDone: boolean,  todoListId:string)=> void
    filter: FilterType
}
export const ToDo:React.FC<ToDoType> = ({
                                            title,
                                            tasks,
                                            remove,
                                            changeFilter,
                                            addTask,
                                            changeStatus,
                                            filter,
                                            id
}) => {

    const resultTasks = tasks.map(i=>{
        return (
            <li key={i.id}
                className={i.isDone ? 'is-done' : ''}
            >
                <input
                    type="checkbox"
                    checked={i.isDone}
                    onChange={(e)=>changeStatus(i.id,e.currentTarget.checked, id)}
                />
                <span>{i.title}</span>
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
