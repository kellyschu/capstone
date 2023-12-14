import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import AuthDetails from './AuthDetails';
import SignIn from './SignIn';
import SignUp from './SignUp';
import EpisodePage from './EpisodePage';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import YourLibraryPage from './YourLibraryPage';
import CategoriesPage from './CategoriesPage';
import SelectCategoryPage from './SelectCategoryPage';
import MostLovedPage from './MostLovedPage';
import MostCommentedPage from './MostCommentedPage';
import SomethingNewPage from './SomethingNewPage';
import MostSavedPage from './MostSavedPage';

const PrivateRoute = ({ element, isLoggedIn, fallbackPath }) => {
  return isLoggedIn ? element : <Navigate to={fallbackPath} />;
};

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUsername, setSelectedUsername] = useState(null);

  const handleLogin = (userId, username) => {
    setLoggedIn(true);
    setSelectedUserId(userId);
    setSelectedUsername(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedUserId(null);
    setSelectedUsername(null);
  };

  return (
    <div className="app-flex" loading="">
      <Sidebar userId={selectedUserId} />
      <div className="page__display-flex">
        <AuthDetails isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute
                element={<HomePage />}
                isLoggedIn={isLoggedIn}
                fallbackPath="/signin"
              />
            }
          />
          <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/episode/:id"
            element={
              <PrivateRoute
                element={<EpisodePage userId={selectedUserId} userName={selectedUsername} />}
                isLoggedIn={isLoggedIn}
                fallbackPath="/signin"
              />
            }
          />
          <Route
            path="/search"
            element={
              <PrivateRoute
                element={<SearchPage />}
                isLoggedIn={isLoggedIn}
                fallbackPath="/signin"
              />
            }
          />
          <Route
            path="/mylibrary/:id"
            element={
              <PrivateRoute
                element={<YourLibraryPage userName={selectedUsername} />}
                isLoggedIn={isLoggedIn}
                fallbackPath="/signin"
              />
            }
          />
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





// {/* {isHome && (
//                             <div className="header">
//                                 <h1>Welcome Back, {selectedUsername}!</h1>
//                                 <div className="header__user-id">
//                                     <span class="material-icons-sharp">people_alt</span>
//                                     <select className="dropdown" onChange={handleSelectUser} onBlur={handleFilterUsers}>
//                                         <option value="">Switch User</option>
//                                         {users.map(user => (
//                                             <option key={user.id} value={user.first_name}>
//                                                 {user.first_name} {user.last_name}
//                                             </option>
//                                         ))}
//                                     </select>     
//                                 </div>
//                             </div>
//                             )}
//                         {!isHome && (
//                             <div className="header__float-right">
//                                 <div className="header__user-id">
//                                     <span class="material-icons-sharp">people_alt</span>
//                                     <select className="dropdown" onChange={handleSelectUser} onBlur={handleFilterUsers}>
//                                         <option value="">Switch User</option>
//                                         {users.map(user => (
//                                             <option key={user.id} value={user.first_name}>
//                                                 {user.first_name} {user.last_name}
//                                             </option>
//                                         ))}
//                                     </select>     
//                                 </div>
//                             </div>
//                             )} */}