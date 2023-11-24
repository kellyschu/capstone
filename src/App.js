import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EpisodePage from './pages/EpisodePage/EpisodePage';
// import Footer from './components/Footer/Footer';
import Sidebar from './components/SideBar/Sidebar';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import MostLovedPage from "./pages/MostLovedPage/MostLovedPage"

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
            <Route path="/home" element={<MostLovedPage />} />
            <Route path="/episode/:id" element={<EpisodePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
