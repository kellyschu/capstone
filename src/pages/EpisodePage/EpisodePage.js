import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EpisodePage() {
    const [episodeData, setEpisodeData] = useState(null);
    const { id } = useParams();
    // const apiUrl = "http://localhost:8002";
    // const [episodes, setEpisodes] = useState([]);
    const [episode, setEpisode] = useState(null);

        useEffect(() => {
            async function getEpisode() {
            try {
                const response = await axios.get(`http://localhost:8002/api/episodes/${id}/comments`);
                setEpisodeData(response.data);
            } catch (error) {
                console.error('Error fetching episode:', error);
            }
        };
        getEpisode();
    }, [id]);

    
    useEffect(() => {
        async function getEpisodes() {
            const response = await axios.get(`http://localhost:8002/api/episodes/${id}`);
            setEpisode(response.data);
            console.log(response.data);
        }
        getEpisodes();
        } , [id]);


        return (
            <div>
                <h1>Episode Page</h1>
                {episode && episode.map((episode) => (
                        <iframe
                        key={episode.id}
                        title={episode.title}
                        src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator&theme=0`}
                        width="50%"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        ></iframe>
                    ))}
                {episodeData && episodeData.map((item) => (
                    <div key={item.id}>
                        <p>{item.first_name} {item.last_name}</p>
                        <p>{new Date(item.timestamp).toLocaleDateString()}</p>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        );

}
export default EpisodePage;