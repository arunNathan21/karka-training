import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

export const Todolist=()=>{

        const [iscomp,setIscomp] = useState("false");
        const [alltodo,setAlltodo] = useState([]);

        const [newtitle,setnewtitle] = useState("");
        const [newdescription,setDescription] = useState("");

        const handleAdd=()=>{
            let newTodolist = {
                title : newtitle,
                description : newdescription
            }
                let updatedtoolbar = [...alltodo];
                updatedtoolbar.push(newTodolist)
                setAlltodo(updatedtoolbar)
                localStorage.setItem('alltodo')
        }
        
        

    return(
        <>
            <div>
                <h2>My Todolist</h2>
            </div>

            <div className="todo_wrapper">
                    <div className="todo_input">
                        <div className="todo_input_item">
                            <label>title</label>
                            <input type="text" value={newtitle} onChange={(e)=>setnewtitle(e.target.value)} placeholder="what to do"/>
                        </div>
                        <div className="todo_input_item">
                            <label>Description</label>
                            <input type="text" value={newdescription} onChange={(e)=>setDescription(e.target.value)} placeholder="newdescription"/>
                        </div>
                        <div className="todo_input_item">
                    
                            <button className="add" onClick={handleAdd}>Add</button>
                        </div>
                    </div>
                    <div className="btn_area">
                        <button className={`secbtn ${iscomp===false && `active`}`} onClick={()=>setIscomp(false)}>Todolist</button>
                        <button className={`secbtn ${iscomp===true && `active`}`} onClick={()=>setIscomp(true)}>complete</button>
                    </div>

                    <div className="todo_list">
                        {alltodo.map((item,index)=>{
                            return(
                                <>
                                    <div className="">
                            <div className="todo_input_item2" key={index}>
                                    <h3>{item.title}</h3>
                                
                                    <AiOutlineDelete className="icon" title="Delete?"/>
                                    <TiTick className="check_icon" title="Complete?"/>
                            </div>
                            <div className="">
                            <p>{item.description}</p>
                            </div>
                        </div>
                                </>
                            )
                            })}
                    </div>
            </div>
        </>
    )
}