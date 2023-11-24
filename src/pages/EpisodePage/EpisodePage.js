import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './EpisodePage.scss'

function EpisodePage() {
    const [episodeData, setEpisodeData] = useState(null);
    const { id } = useParams();
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
            <div className='page__display-flex'>
                <Header />
                    <section className='page__main'>
                        {episode && episode.map((episode) => (
                                <iframe
                                key={episode.id}
                                title={episode.title}
                                // style="border-radius:12px" 
                                src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator&theme=0`}
                                width="92%"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                frameBorder="0" 
                                loading="lazy"
                                height="352" 
                                ></iframe>
                                // <iframe 
                                // src="https://open.spotify.com/embed/episode/4QAvT1wPq6bkQ9tLM1PQjr?utm_source=generator" 
                                // width="100%" 
                                // allowfullscreen="" 
                                // allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                // loading="lazy">
                                // </iframe>
                            ))}
                        {episodeData && episodeData.map((item) => (
                            <div key={item.id}>
                                <p>{item.first_name} {item.last_name}</p>
                                <p>{new Date(item.timestamp).toLocaleDateString()}</p>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </section>
                    </div>
        );

}
export default EpisodePage;