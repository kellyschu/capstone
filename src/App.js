import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EpisodePage from './pages/EpisodePage/EpisodePage';
// import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/Sidebar';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
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
// import { useParams } from 'react-router-dom';

function App() {
  
  // const [comments, setComments] = useState([]);
  
  // useEffect(() => {
  //   async function getComments() {
  //     const response = await axios.get(`${apiUrl}/api/comments`);
  //     setComments(response.data);
  //   }
  //   getComments();
  // } , []);

  return (
    <div className="app-flex">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/episode/:id" element={<EpisodePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/user/:id" element={<YourLibraryPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            {/* <Route path="/categories/id" element={<CategoryPage />} /> */}
            <Route path="/mostplayed" element={<MostPlayedPage />} />
            <Route path="/mostloved" element={<MostLovedPage />} />
            <Route path="/mosttalkedabout" element={<MostCommentedPage />} />
            <Route path="/somethingnew" element={<SomethingNewPage />} />




          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
