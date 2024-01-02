import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {

    const localData=JSON.parse(localStorage.getItem('userData'))
    console.log(localData);

    return (
        <>
            <h2>Create Todo List</h2>
            <Link to="/">LogOut</Link><br/>
            <Link to="">Create Todolist</Link>
            <table>
                <thead>
                    <tr>
                        <td>Sino</td>
                        <td>UserName</td>
                        <td>Password</td>
                    </tr>
                </thead>
                <tbody>
                    {localData.map((val, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.pass}</td>
                            <td><button>Reset</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
