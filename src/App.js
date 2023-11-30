import './App.scss';
import { Route, Routes } from 'react-router-dom';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import Sidebar from './components/SideBar/Sidebar';
import MostCommentedPage from "./pages/MostCommentedPage/MostCommentedPage" 
import SomethingNewPage from "./pages/SomethingNewPage/SomethingNewPage"
import HomePage from "./pages/HomePage/HomePage"
import SearchPage from "./pages/SearchPage/SearchPage"
import YourLibraryPage from "./pages/YourLibraryPage/YourLibraryPage"
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"
import axios from 'axios';
import { useEffect, useState } from 'react';
import SelectCategoryPage from './pages/SelectCategoryPage/SelectCategoryPage';
import MostSavedPage from './pages/MostSavedPage/MostSavedPage';
import { useLocation } from 'react-router-dom';
import React from 'react';
import MostLovedPage from './pages/MostLovedPage/MostLovedPage';

function App() {
    //  all users from database on pageload
    const [users, setUsers] = useState([]);

    //  filteredUsers is the specefic users obj. selected from dropdown
    const [filteredUsers, setFilteredUsers] = useState({});

    //  Selected UserFirstName to display in header
    const [selectedUsername, setSelectedUsername] = useState('');

    //  dropdown selected userId passed to SideBar to NavLink to mylibrary/userId
    const [selectedUserId, setSelectedUserId] = useState('');

    // mainUser is the user whose library is displayed on home page
    const [mainUser, setMainUser] = useState({});

    //to determine if header should be displayed
    const location = useLocation();
    const isHome = location.pathname === '/';


        const handleSelectUser = (event) => {
            const selectedUserName = event.target.value;
            const selectedUserId = users.find(user => user.first_name === selectedUserName)?.id;
            setSelectedUsername(selectedUserName);
            setSelectedUserId(selectedUserId);
            console.log(selectedUserName)
        };
    
        useEffect(() => {
            async function getUsers() {
                try {
                    const response = await axios.get(`http://localhost:8002/api/users`);
                    setUsers(response.data);
                    setMainUser(response.data[0]);
                    setSelectedUsername(response.data[0]?.first_name);
                    setSelectedUserId(response.data[0]?.id);
                } catch (error) {
                    console.error('Error fetching users:', error);
                }
            }
            getUsers();
        }, []);
    
        const handleFilterUsers = () => {
            const filtered = users.filter(user => user.first_name === selectedUsername);
            setFilteredUsers(filtered);
            if (filtered.length > 0) {
                setMainUser(filtered[0]);
            } else {
                console.error('Error filtering users:');            
            }
            };

    
    return (
        <div className="app-flex" loading="">
                    <Sidebar userId={selectedUserId} />
                        <div className="page__display-flex">
                            {isHome && (
                            <div className="header">
                                <h1>Welcome Back, {selectedUsername}!</h1>
                                <div className="header__user-id">
                                    <span class="material-icons-sharp">people_alt</span>
                                    <select className="dropdown" onChange={handleSelectUser} onBlur={handleFilterUsers}>
                                        <option value="">Switch User</option>
                                        {users.map(user => (
                                            <option key={user.id} value={user.first_name}>
                                                {user.first_name} {user.last_name}
                                            </option>
                                        ))}
                                    </select>     
                                </div>
                            </div>
                            )}
                        {!isHome && (
                            <div className="header__float-right">
                                <div className="header__user-id">
                                    <span class="material-icons-sharp">people_alt</span>
                                    <select className="dropdown" onChange={handleSelectUser} onBlur={handleFilterUsers}>
                                        <option value="">Switch User</option>
                                        {users.map(user => (
                                            <option key={user.id} value={user.first_name}>
                                                {user.first_name} {user.last_name}
                                            </option>
                                        ))}
                                    </select>     
                                </div>
                            </div>
                            )}
                    <Routes>
                    <Route path="/episode/:id" element={<EpisodePage userId={selectedUserId} userName={selectedUsername}/>} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/mylibrary/:id" element={<YourLibraryPage userName={selectedUsername}/>} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/categories/:category" element={<SelectCategoryPage />} />
                    <Route path="/mostloved" element={<MostLovedPage />} />
                    <Route path="/mosttalkedabout" element={<MostCommentedPage />} />
                    <Route path="/somethingnew" element={<SomethingNewPage />} />
                    <Route path="/mostsaved" element={<MostSavedPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;