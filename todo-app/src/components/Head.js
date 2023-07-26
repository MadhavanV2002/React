import React from "react";
import TodoList from "./List";
import {nanoid} from 'nanoid'
import notask from '../images/notask.png'
export default function Head(){ 
    const DOLIST = JSON.parse(localStorage.getItem("TODOLIST")) || []
    const [data,setData] = React.useState({
        Id:"",
        Name : "",
        Description : "",
        Completed : false
    })
    const [List,setList] = React.useState(DOLIST)
    function handleChange(event){
        const {name,value} = event.target
        setData((oldData) => {
            return {...oldData,[name]:value,Id:nanoid()}
        })
    }
    function handleSubmit(){
        if(data.Name!=="" && data.Description!==""){
            DOLIST.push(data)
            setList(DOLIST)
            localStorage.setItem("TODOLIST",JSON.stringify(DOLIST))
        }
        setData({
            Id:"",
            Name : "",
            Description : "",
            Completed : false
        })
    }
    function handleComplete(id){
        let index = 0
        for(let i=0;i<DOLIST.length;i++){
            if(DOLIST[i].Id===id){
                index = i
                break
            }
        }
        DOLIST[index].Completed = true
        localStorage.setItem("TODOLIST",JSON.stringify(DOLIST))
        setList((old) => old.map((Do) => {
            return Do.Id===id?{...Do,Completed:true}:{...Do}
        }))
    }
    function handleDelete(id){
        let index = 0
        for(let i=0;i<DOLIST.length;i++){
            if(DOLIST[i].Id===id){
                index = i
                break
            }
        }
        DOLIST.splice(index,1)
        setList((oldList) => {
            return [...DOLIST]
        })
        localStorage.setItem("TODOLIST",JSON.stringify(DOLIST)) 
    }
    const DoList = List.map((Do) => <TodoList complete={Do.Completed} id={Do.Id} name={Do.Name} description={Do.Description} onComplete={() => handleComplete(Do.Id)} onDelete={() => handleDelete(Do.Id)}/>)
    return(
        <div>
            <div className="head-container">
                <h1>My Todos</h1>
                <div className="data-container">
                    <div className="name-container">
                        <h3>Name</h3>
                        <input type="text" name="Name" value={data.Name} onChange={handleChange}/>
                    </div>
                    <div className="des-container">
                        <h3>Description</h3>
                        <input type="text" name="Description" value={data.Description} onChange={handleChange}/>
                    </div>
                    <button className="add-button" onClick={handleSubmit}>Add ToDo</button>
                </div>
            </div>
            <div className="todo-container">
                {
                    List.length===0?<img src={notask}/>:DoList
                }
            </div>
        </div>
    )
}
