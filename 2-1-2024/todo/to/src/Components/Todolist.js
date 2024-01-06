import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
// import { TiTick } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";

export const Todolist=()=>{

    const [iscomp, setIscomp] = useState(false);
    const [alltodo, setAlltodo] = useState([]);
    const [newtitle, setNewtitle] = useState("");
    const [newdescription, setNewdescription] = useState("");
    const [editableIndex, setEditableIndex] = useState(null);

    const handleAdd = () => {
        let newTodolist = {
            title: newtitle,
            description: newdescription
        };
        let updatedtoolbar = [...alltodo];
        updatedtoolbar.push(newTodolist);
        setAlltodo(updatedtoolbar);
        localStorage.setItem('todolist', JSON.stringify(updatedtoolbar));
        setNewtitle("");
        setNewdescription("");
    };

    const handleDelet = (index) => {
        let updatedTodoList = [...alltodo];
        updatedTodoList.splice(index, 1);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
        setAlltodo(updatedTodoList);
    };

    const handleEdit = (index) => {
        setEditableIndex(index);
        setNewtitle(alltodo[index].title);
        setNewdescription(alltodo[index].description);
    };

    const handleSaveEdit = () => {
        let updatedTodoList = [...alltodo];
        updatedTodoList[editableIndex] = {
            title: newtitle,
            description: newdescription
        };
        localStorage.setItem('todolist', JSON.stringify(updatedTodoList));
        setAlltodo(updatedTodoList);
        setEditableIndex(null);
        setNewtitle("");
        setNewdescription("");
    };

    const handleCancelEdit = () => {
        setEditableIndex(null);
        setNewtitle("");
        setNewdescription("");
    };

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('todolist'));
        if (savedTodo) {
            setAlltodo(savedTodo);
        }
    }, []);
        
        

    return(
        <>
            <div>
                <h2 className="list_title">My Todolist</h2>
            </div>

            <div className="todo_wrapper">
                    <div className="todo_input">
                        <div className="todo_input_item">
                            <label>title</label>
                            <input type="text" value={newtitle} onChange={(e)=>setNewtitle(e.target.value)} placeholder="what to do"/>
                        </div>
                        <div className="todo_input_item">
                            <label>Description</label>
                            <input type="text" value={newdescription} onChange={(e)=>setNewdescription(e.target.value)} placeholder="newdescription"/>
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
                    {alltodo.map((item, index) => {
                        return (
                            <div className={`todo_input_item2 ${editableIndex === index && "edit-mode"}`} key={index}>
                                <h3>{item.title}</h3>
                               
                                
                                {editableIndex === index ? (
                                    <>
                                        <input
                                            type="text"
                                            value={newtitle}
                                            onChange={(e) => setNewtitle(e.target.value)}
                                            placeholder="Edit title"
                                        />
                                        <input
                                            type="text"
                                            value={newdescription}
                                            onChange={(e) => setNewdescription(e.target.value)}
                                            placeholder="Edit description"
                                        />
                                        <button onClick={handleSaveEdit}>Save</button>
                                        <button onClick={handleCancelEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <div className="description">
                                        <p>{item.description}</p>
                                    </div>
                                )}
                                <FaEdit className="check_edit" title="Edit" onClick={() => handleEdit(index)} />
                                 <AiOutlineDelete
                                    className="icon"
                                    title="Delete?"
                                    onClick={() => handleDelet(index)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}