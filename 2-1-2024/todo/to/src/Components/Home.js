import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Todolist } from "./Todolist";
import { CgProfile } from "react-icons/cg";

export const Home = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const [loggedInPass, setLoggedInPass] = useState(localStorage.getItem("loggedInPass") || "");
    const [editableIndex, setEditableIndex] = useState(-1);
    const [newPassword, setNewPassword] = useState('');

    const handleEdit = () => {
        setEditableIndex(0);
    };

    const handlePasswordChange = (newPassword) => {
        setNewPassword(newPassword);
    };

    const handleSave = () => {

        localStorage.setItem('loggedInPass', newPassword);
        setLoggedInPass(newPassword);


        const userData = JSON.parse(localStorage.getItem('userData')) || [];
        const updatedUserData = userData.map(user => {
            if (user.name === loggedInUser) {
                return { ...user, pass: newPassword };
            }
            return user;
        });
        localStorage.setItem('userData', JSON.stringify(updatedUserData));

        setEditableIndex(-1);
    };

    return (
        <>
            <div className="Profile">
                <h2>Create Todo List</h2>
                <Link to="" className="createto">Create Todolist</Link>
            </div>
                <div className="Profile prf">
                     <Link to="">  <CgProfile className="profile"/></Link> 

                </div>
            <div className="Profile prf gt">
                <Link to="/" className="Logout">LogOut</Link><br/>

                <div>
                    <h3>Profile name: {loggedInUser}</h3>
                    {editableIndex === 0 && (
                        <>
                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => handlePasswordChange(e.target.value)}
                            />
                            <button onClick={handleSave}>Update</button>
                        </>
                    )}
                    {editableIndex !== 0 && (
                        <>
                            <h3>Password: {loggedInPass}</h3>
                            <button onClick={handleEdit}>Reset Password</button>
                        </>
                    )}
                </div>
            </div>

            <Todolist/>
        </>
    );
}
