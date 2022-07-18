import React from 'react';

const UsersList = ({ users, deleteUser,selectUser }) => {


    return (
        <ul className='container'>
            {
                users.map(user => (
                    <li key={user.id} className="card">
                        <p><b>First Name:</b> {user.first_name}</p>
                        <p><b>Last Name:</b> {user.last_name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Birthday:</b> {user.birthday}</p>
                       <div className='iContainter'>
                       <i className="fa-solid fa-user-pen"
                            style={{ color: "black" }}
                            onClick={() => selectUser(user) }></i>
                       <i className="fa-solid fa-trash-can"
                            style={{ color: "red" }}
                            onClick={() => deleteUser(user.id)}></i>
                       </div>
                            
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;

