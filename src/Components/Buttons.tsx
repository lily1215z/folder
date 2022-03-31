import React from 'react';
import {FilterType} from "../App";

type ButtonsType = {
    id:string
    changeFilter: (value: FilterType, todoListId:string) => void
    filter:FilterType
}
export const Buttons = (props: ButtonsType) => {
    return (
        <div>
            <button
                className={props.filter === 'all' ? 'active-filter' : ''}
                onClick={()=>props.changeFilter("all", props.id)}
            >all</button>
            <button
                 className={props.filter === 'active' ? 'active-filter' : ''}
                onClick={()=>props.changeFilter("active", props.id)}
            >active</button>
            <button
                 className={props.filter === 'completed' ? 'active-filter' : ''}
                onClick={()=>props.changeFilter("completed", props.id)}
            >completed</button>
        </div>
    );
};

