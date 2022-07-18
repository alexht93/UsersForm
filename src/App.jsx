import axios from 'axios';
import { useEffect, useState } from 'react'

import './App.css'
import UsersForm from './Components/UsersForm';
import UsersList from './Components/UsersList';

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data));
  }

  const selectUser = (user) => {
    setSelectedUser(user);
  }

  const deselectUser = () => setSelectedUser(null);

  const deleteUser = (id) => {
    alert("eliminando...")
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then(() => getUsers());
  }



  console.log(users);

  return (
    <div className="App">
      <div className='col1'style={{backgroundColor:"white", color:"white"}}>
        <div>
          <UsersForm
            getUsers={getUsers}
            userSelected={userSelected}
            deselctUser={deselectUser}
          />
        </div>
      </div>
      <div className='col' style={{backgroundColor: "black"}}>
        <UsersList
          users={users}
          deleteUser={deleteUser}
          selectUser={selectUser}
        />
      </div>

    </div>
  )
}

export default App
