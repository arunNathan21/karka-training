import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Todolist } from "./Todolist";

export const Home = () => {
    // Initialize localData with an empty array to avoid the 'localData' is not defined error
    const localData = JSON.parse(localStorage.getItem('userData')) || [];
    const [editableIndex, setEditableIndex] = useState(-1);
    const [newPasswords, setNewPasswords] = useState(Array(localData.length).fill(''));

    const handleEdit = (index) => {
        setEditableIndex(index);
    };

    const handlePasswordChange = (index, newPassword) => {
        const updatedNewPasswords = [...newPasswords];
        updatedNewPasswords[index] = newPassword;
        setNewPasswords(updatedNewPasswords);
    };

    const handleSave = (index) => {
        // Update the password in local storage
        const updatedData = [...localData];
        updatedData[index].pass = newPasswords[index];
        localStorage.setItem('userData', JSON.stringify(updatedData));

        // Reset editable state
        setEditableIndex(-1);
    };

    return (
        <>
            <div className="Profile">
                <h2>Create Todo List</h2>
                <Link to="" className="createto">Create Todolist</Link>
            </div>
            <div className="Profile prf">
                <Link to="/" className="Logout">LogOut</Link><br/>
                {localData.map((val, index) => (
                    <div key={index}>
                        <h3>Profile name: {val.name}</h3>
                        {editableIndex === index ? (
                            <>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPasswords[index]}
                                    onChange={(e) => handlePasswordChange(index, e.target.value)}
                                />
                                <button onClick={() => handleSave(index)}>Update</button>
                            </>
                        ) : (
                            <>
                                <h3>Password: {val.pass}</h3>
                                <button onClick={() => handleEdit(index)}>Reset Password</button>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <Todolist/>
        </>
    );
}
