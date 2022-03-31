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

type TodoListType = {
    id: string
    title: string
    filter: FilterType
}
function App() {
    const todoList_1 = v1()
    const todoList_2 = v1()
    const todoList_3 = v1()

    const [todoList, setTodoList] = useState<Array<TodoListType>>([
        {id: todoList_1, title: 'What to buy', filter: 'all'},
        {id: todoList_2, title: 'What to learn', filter: 'all'},
        {id: todoList_3, title: 'Where to live', filter: 'all'},
    ])

    const [tasks, setTasks] = useState({
        [todoList_1]: [
            {id: v1(), title: 'HTML', isDone: true},
            {id: v1(), title: 'js', isDone: false},
            {id: v1(), title: 'react', isDone: true},
        ],
        [todoList_2]: [
            {id: v1(), title: 'book', isDone: true},
            {id: v1(), title: 'milk', isDone: false},
            {id: v1(), title: 'apple', isDone: true},
        ],
        [todoList_3]: [
            {id: v1(), title: 'Spain', isDone: true},
            {id: v1(), title: 'Canada', isDone: false},
            {id: v1(), title: 'Odessa', isDone: true},
        ]
    })

    const addTask = (title: string, todoListId:string) => {
        const newTask = {id:v1(), title: title, isDone: false}
        const todoListTasks = tasks[todoListId]
        tasks[todoListId] = [newTask, ...todoListTasks]
        setTasks({...tasks})
    }

    const remove = (id:string, todoListId:string) => {
        const todoListTasks = tasks[todoListId]
        tasks[todoListId] = todoListTasks.filter(i=>i.id !== id)
        setTasks({...tasks})
    }

    const changeFilter = (value:FilterType, todoListId:string) => {
        let todo = todoList.find(i=>i.id === todoListId)
        if(todo) {
            todo.filter = value
            setTodoList([...todoList])
        }
    }

    const changeStatus = (taskId:string, isDone: boolean,  todoListId:string) => {
        const todoListTasks = tasks[todoListId]
        tasks[todoListId] = todoListTasks.map(i=>i.id === taskId ? {...i, isDone: isDone} : i)
        setTasks({...tasks})
    }

    return (
        <div className="App">
        {
            todoList.map(i=> {

                let tasksForTodolist = tasks[i.id];

                if(i.filter === "active") {
                    tasksForTodolist = tasks[i.id].filter(i => !i.isDone)
                }
                if(i.filter === "completed") {
                    tasksForTodolist = tasks[i.id].filter(i => i.isDone)
                }
                return(
                    <ToDo
                        key={i.id}
                        id={i.id}
                        title={i.title}
                        tasks={tasksForTodolist}
                        remove={remove}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={i.filter} />
                )
            })
        }
        </div>
    )
}

export default App;
