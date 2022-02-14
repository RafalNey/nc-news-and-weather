import React from 'react'
import { useState, useEffect } from 'react';
import { getUsers } from '../utils/api';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
        .then((usersFromApi) => {
            setUsers(usersFromApi);
        });
    }, []);
    
    return (
    <main>
        <h2>Users</h2>
        <ul className='User__List'>
        {users.map((user) => {
            return (
                <li key={ user.userName } className='User__Card'>
                    <h3>{ user.userName }</h3>
                    <img 
                        className='User__avatar--img'
                        src={ user.avatar_url}
                        alt={ user.userName }
                    ></img>
                    <button>Start</button>
                </li>
            );
        })}
        </ul>
    </main>
  )
}

export default Users