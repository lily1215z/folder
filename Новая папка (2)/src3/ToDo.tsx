import React, {useState} from 'react';
import {Header} from "./Components/Header";
import {Buttons} from "./Components/Buttons";
import {FilterType, TasksType} from "./App";
import {Tasks} from "./Components/Tasks";
import {EditModeTask} from "./Components/EditModeTask";

type ToDoType = {
    id: string
    title: string
    tasks: Array<TasksType>
    remove: (id: string, todoListId: string) => void
    changeFilter: (value: FilterType, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeStatus: (taskId: string, isDone: boolean, todoListId: string) => void
    filter: FilterType
    onChange: (title: string, taskId: string, todoListId: string) => void
}
export const ToDo: React.FC<ToDoType> = ({
                                             title,
                                             tasks,
                                             remove,
                                             changeFilter,
                                             addTask,
                                             changeStatus,
                                             filter,
                                             id,
                                             onChange
                                         }) => {


    const resultTasks = tasks.map(i => {

        const newTitleEdit = (title: string) => {
            onChange(title, i.id, id)
        }
            return (
                <li key={i.id}
                    className={i.isDone ? 'is-done' : ''}
                >
                    <input
                        type="checkbox"
                        checked={i.isDone}
                        onChange={(e) => changeStatus(i.id, e.currentTarget.checked, id)}
                    />
                    <EditModeTask title={i.title} onChange={newTitleEdit}/>
                    <button
                        onClick={() => remove(i.id, id)}
                    >x</button>
                </li>
            )
        }
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
