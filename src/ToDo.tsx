import React, {useState} from 'react';
import {Header} from "./Components/Header";
import {Buttons} from "./Components/Buttons";
import {Tasks} from "./Components/Tasks";
import {FilterType, TasksType} from "./App";

type ToDoType = {
    title: string
    tasks: Array<TasksType>
    remove: (id: string)=> void
    changeFilter: (value: FilterType) => void
    addTask: (title:string)=> void
    changeStatus: (taskId:string, isDone: boolean)=> void
    filter: FilterType
}
export const ToDo:React.FC<ToDoType> = ({
                                            title,
                                            tasks,
                                            remove,
                                            changeFilter,
                                            addTask,
                                            changeStatus,
                                            filter
}) => {

    const resultTasks = tasks.map(i=>{
        return (
            <li key={i.id}
                className={i.isDone ? 'is-done' : ''}
            >
                <input
                    type="checkbox"
                    checked={i.isDone}
                    onChange={(e)=>changeStatus(i.id,e.currentTarget.checked)}
                />
                <span>{i.title}</span>
                <button
                    onClick={()=>remove(i.id)}
                >x</button>
            </li>
        )}
    )

    return (
        <div>
            <Header
                title={title}
                addTask={addTask}
            />
            <Tasks
                resultTasks={resultTasks}
            />
            <Buttons
                changeFilter={changeFilter}
                filter={filter}
            />
        </div>
    );
};
