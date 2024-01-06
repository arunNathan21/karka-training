import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Todolist } from "./Todolist";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";

export const Home = ({sus}) => {
    const [showProfilePopup, setShowProfilePopup] = useState(false);
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

    const handleProfileClick = () => {
        setShowProfilePopup(!showProfilePopup);
    };

    return (
        <>
   
            <div className="Profile">
                <h2>Create Todo List</h2>

            </div>
            <div className="Profile prf">
                <Link to="" onClick={handleProfileClick}>
                    <CgProfile className="profile" />
                </Link>
                {showProfilePopup && (
                    <div className="profile-popup">
                        {/* Your profile popup content goes here */}
                        <div>
                    <h3>Username: {loggedInUser}</h3>
                    {editableIndex === 0 && (
                        <>
                            <input
                                type="password" className="up"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => handlePasswordChange(e.target.value)}
                            />
                            <button onClick={handleSave} className="update">Update</button>
                        </>
                    )}
                    {editableIndex !== 0 && (
                        <>
                            <h3>Password: {loggedInPass}</h3>
                            <button onClick={handleEdit} className="reset">Reset Password</button>
                        </>
                    )}
                </div>
                        <Link to="/" className="Logout"><AiOutlineLogout /></Link><br/>
                    </div>
                )}
                
            </div>
                
            <div className="Profile prf ">
                

                
            </div>

            <Todolist/>
        </>
    );
}
