import React from 'react';

type TasksType = {
    resultTasks: Array<object>
}
export const Tasks = (props: TasksType) => {
    return (
        <div>
            <ul>
                {props.resultTasks}
            </ul>
        </div>
    );
};

