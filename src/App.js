import './App.scss';
import { Route, Routes } from 'react-router-dom';
import EpisodePage from './pages/EpisodePage/EpisodePage';
// import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/Sidebar';
import MostLovedPage from "./pages/MostLovedPage/MostLovedPage"
import MostPlayedPage from "./pages/MostPlayedPage/MostPlayedPage"
import MostCommentedPage from "./pages/MostCommentedPage/MostCommentedPage" 
import SomethingNewPage from "./pages/SomethingNewPage/SomethingNewPage"
import HomePage from "./pages/HomePage/HomePage"
import SearchPage from "./pages/SearchPage/SearchPage"
import YourLibraryPage from "./pages/YourLibraryPage/YourLibraryPage"
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"
// import CategoryPage from "./pages/CategoryPage/CategoryPage"
// import Header from './components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './components/Header/Header.scss';
import { useNavigate } from 'react-router-dom';
import SelectCategoryPage from './pages/SelectCategoryPage/SelectCategoryPage';

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState({});
    const [selectedUser, setSelectedUser] = useState("John");
    const [selectedUserId, setSelectedUserId] = useState("7a8e0fc8-34da-4e61-89cd-5e80afed8609");

        const navigate = useNavigate();

        const handleSelectUser = (event) => {
            const selectedUserName = event.target.value;
            const selectedUserId = users.find(user => user.first_name === selectedUserName)?.id;
            setSelectedUser(selectedUserName);
            setSelectedUserId(selectedUserId);
            // navigate(`/mylibrary/${selectedUserId}`);
        };

    
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
    
    
    return (
        <div className="app-flex">
                    <Sidebar userId={selectedUserId}/>
                        <div className="page__display-flex home-page">
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

                    <Routes>
                    <Route path="/episode/:id" element={<EpisodePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/mylibrary/:id" Component={<YourLibraryPage user={selectedUserId}/>} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route path="/categories/:category" element={<SelectCategoryPage />} />

                    {/* <Route path="/categories/id" element={<CategoryPage />} /> */}
                    <Route path="/mostplayed" element={<MostPlayedPage />} />
                    <Route path="/mostloved" element={<MostLovedPage />} />
                    <Route path="/mosttalkedabout" element={<MostCommentedPage />} />
                    <Route path="/somethingnew" element={<SomethingNewPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
