import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import AddTodoForm from "./addTodoForm";

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodoListType = {
    id:string
    title: string
    filter: FilterValuesType
}
type TasksType = {
        id:string,
        title:string,
        isDone: boolean
}
type TasksArrayType = {
    [key:string]: Array<TasksType>
}
function App() {
    const todoList_1 = v1()
    const todoList_2 = v1()

    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoList_1, title: 'What I must buy', filter: 'all'},
        {id: todoList_2, title: 'What I must learn', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TasksArrayType>({
        [todoList_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todoList_2]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
    })

    function removeTask(id: string, todoListId: string) {
        // let currentTodoList = tasks[todoListId].filter(t => t.id != id)
        // setTasks({...tasks})

        // let todoListTasks = tasks[todoListId];
        tasks[todoListId] = tasks[todoListId].filter(t => t.id != id)
        setTasks({...tasks})
    }

    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false};

        tasks[todoListId] = [task, ...tasks[todoListId]];
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        let task = tasks[todoListId].find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks({...tasks});
    }

    function changeFilter(value: FilterValuesType, todoListId: string) {
        let currentTodoList = todoLists.find(i => i.id === todoListId)
        if(currentTodoList) {
            currentTodoList.filter = value
            setTodoLists([...todoLists])
        }
    }

    const addTodoList = (title:string) => {
        const newTodoListId = v1()
        const newTodoList: TodoListType = {id: newTodoListId, title: title, filter: 'all'}
        setTodoLists([newTodoList, ...todoLists])
        setTasks({...tasks, [newTodoListId]:[]})
    }

    return (
        <div className="App">
            <AddTodoForm addItem={addTodoList} />

            {todoLists.map(i => {
                const currentTodoList = tasks[i.id]
                let tasksForTodolist = tasks[i.id];

                if (i.filter === "active") {
                    tasksForTodolist = currentTodoList.filter(t => t.isDone === false);
                }
                if (i.filter === "completed") {
                    tasksForTodolist = currentTodoList.filter(t => t.isDone === true);
                }

                return (
                    <Todolist
                        key={i.id}
                        id={i.id}
                        title={i.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={i.filter}
                    />
                )
            })
            }

        </div>
    );
}

export default App;
