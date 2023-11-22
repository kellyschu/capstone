import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EpisodePage from './pages/EpisodePage/EpisodePage';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const apiUrl = "http://localhost:8002";
  const [episodes, setEpisodes] = useState([]);
  
  useEffect(() => {
    async function getEpisodes() {
      const response = await axios.get(`${apiUrl}/api/episodes`);
      setEpisodes(response.data);
    }
    getEpisodes();
  } , []);
  
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    async function getComments() {
      const response = await axios.get(`${apiUrl}/api/comments`);
      setComments(response.data);
    }
    getComments();
  } , []);

  return (
    <>
      {/* <Header /> */}
      {/* <SideBar /> */}
      <h1>App</h1>
      {episodes.map((episode) => (
            <iframe
              key={episode.id}
              title={episode.title}
              src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator&theme=0`}
              width="50%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ))}
    

      <BrowserRouter>
        <Routes>
          <Route path="/episode/:id" element={<EpisodePage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
