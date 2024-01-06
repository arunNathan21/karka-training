import React, { useState } from "react";

const LogoutModal = ({ onConfirm, onCancel }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleConfirm = () => {
        onConfirm(username, password);
    };

    return (
        <div className="logout-modal">
            <h3>Confirm Logout</h3>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default LogoutModal;
