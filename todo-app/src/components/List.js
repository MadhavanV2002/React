import React from "react";
export default function TodoList(props){
    const style1 = {
        color : props.complete?"grey":"rgb(244, 152, 32)"
    }
    const style2 = {
        color : props.complete?"grey":"white"
    }
    return(
        <div className="todo-list">
            <div className="name-des">
                <h1 style={style1} className="todo-name">{props.complete?<del>{props.name}</del>:props.name}</h1>
                <p  style={style2} className="todo-des">{props.complete?<del>{props.description}</del>:props.description}</p>
            </div>
            {!(props.complete) && <button className="complete" onClick={props.onComplete}>Complete</button>}
            <button className="delete" onClick={props.onDelete}>Delete</button>
        </div>
    )
}