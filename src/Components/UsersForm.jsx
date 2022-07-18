import React, { useEffect, useState } from 'react';
import axios from "axios"

const UsersForm = ({ getUsers, userSelected, deselctUser }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthDay] = useState(" ");

    useEffect(() => {
        if (userSelected !== null) {
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthDay(userSelected.birthday);
        }

    }, [userSelected])

    const submit = (e) => {
        e.preventDefault();
        alert("procesando...")
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday
        }
        console.log(user);
        if (userSelected !== null) {
            axios
                .put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers();
                    reset();
                    deselctUser();
                });
        } else {  
            axios
                .post("https://users-crud1.herokuapp.com/users/", user)
                .then(() =>{
                    getUsers();
                    reset();
                });
        }
    }

    const reset = () =>{
        setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setBirthDay("");
    }

    const clear = () =>{
        reset();
        deselctUser();
    }

    return (

        <form className='formContainer' onSubmit={submit}>
            <h1>Users</h1>
            <div className="input-container">
            <i className="fa-regular fa-user"></i>
                <input type="text"
                    placeholder = "type your first name"
                    id='firstName'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div className="input-container">
            <i className="fa-regular fa-user"></i>
                <input type="text"
                 placeholder = "type your last name"
                    id='lastName'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
            <div className="input-container">
            <i className="fa-regular fa-envelope"></i>
                <input type="text"
                 placeholder = "type your email"
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="input-container">
            <i className="fa-solid fa-key"></i>
                <input type="password"
                 placeholder = "type your password"
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="input-container">
            <i className="fa-solid fa-calendar-days"></i>
                <input type="date"
                    id='birthday'
                    value={birthday}
                    onChange={e => setBirthDay(e.target.value)}
                />
            </div>
            <button>{userSelected !== null ? "Update" : "Submit"} </button>
            {userSelected !== null && <button onClick={clear} type="button">Clear</button> }

        </form>
    );
};

export default UsersForm;