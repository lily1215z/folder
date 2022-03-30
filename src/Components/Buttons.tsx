import React from 'react';
import {FilterType} from "../App";

type ButtonsType = {
    changeFilter: (value: FilterType) => void
    filter:FilterType
}
export const Buttons = (props: ButtonsType) => {
    return (
        <div>
            <button
                className={props.filter === 'all' ? 'active-filter' : ''}
                onClick={()=>props.changeFilter("all")}
            >all</button>
            <button
                 className={props.filter === 'active' ? 'active-filter' : ''}
                onClick={()=>props.changeFilter("active")}
            >active</button>
            <button
                 className={props.filter === 'completed' ? 'active-filter' : ''}
                onClick={()=>props.changeFilter("completed")}
            >completed</button>
        </div>
    );
};

