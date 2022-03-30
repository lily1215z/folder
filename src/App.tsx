import React, {useState} from 'react';
import './App.css';
import {ToDo} from "./ToDo";
import {v1} from "uuid";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = "all" | "active" | "completed"

function App() {
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'js', isDone: false},
        {id: v1(), title: 'react', isDone: true}
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    const addTask = (title: string) => {
        const newTask = {id:v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const remove = (id:string) => {
        setTasks(tasks.filter(i=>i.id !== id))
    }

    const changeFilter = (value:FilterType) => {
        setFilter(value)
    }

    let tasksForTodoList = tasks;
    if(filter === "active") {
        tasksForTodoList = tasks.filter(i => !i.isDone)
    }
    if(filter === "completed") {
        tasksForTodoList = tasks.filter(i => i.isDone)
    }

    const changeStatus = (taskId:string, isDone: boolean) => {
        setTasks(tasks.map(i=>i.id === taskId ? {...i, isDone: isDone} : i))
    }

  return (
    <div className="App">
      <ToDo
          title="what to learn"
          tasks={tasksForTodoList}
          remove={remove}
          changeFilter={changeFilter}
          addTask={addTask}
          changeStatus={changeStatus}
          filter={filter}
      />
    </div>
  );
}

export default App;
