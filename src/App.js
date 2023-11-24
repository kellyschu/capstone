import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import Footer from './components/Footer/Footer';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

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
    <>
      {/* <Header /> */}
      {/* <SideBar /> */}
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/episode/:id" element={<EpisodePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
