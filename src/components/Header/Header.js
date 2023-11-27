import React, { useState, useEffect } from 'react';
import './Header.scss';
import axios from 'axios';
import '@material-design-icons/font/sharp.css'

function Header() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await axios.get(`http://localhost:8002/api/users`);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        getUsers();
    }, []);

    const handleFilterUsers = () => {
        const filtered = users.filter(user => user.first_name === selectedUser);
        setFilteredUsers(filtered);
    };

    const handleSelectUser = (event) => {
        setSelectedUser(event.target.value);
    };

    return (
        <div className='header'>
            <h1>Welcome back, {selectedUser}!</h1>
            <div className="header__user-id">
                <span class="material-icons-sharp">people_alt</span>
                <select className="dropdown" onChange={handleSelectUser} onBlur={handleFilterUsers}>
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user.id} value={user.first_name}>
                            {user.first_name} {user.last_name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Header;