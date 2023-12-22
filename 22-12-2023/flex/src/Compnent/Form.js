import React, { useState } from "react";

export const Form = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        pass: ""
    });

    const handlaSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        
        setFormValues({
            name: "",
            pass: ""
        });
    };

    return (
        <form onSubmit={handlaSubmit}>
            <label>name</label>
            <input
                type="text"
                placeholder="name"
                value={formValues.name}
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}    
            />
            <label>password</label>
            <input
                type="password"
                placeholder="password"
                value={formValues.pass}
                onChange={(e) => setFormValues({ ...formValues, pass: e.target.value })}
            />
            <button type="submit">submit</button>
        </form>
    );
};
