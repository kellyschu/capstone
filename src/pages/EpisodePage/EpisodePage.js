import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EpisodePage.scss'
import CommentForm from '../../components/CommentForm/CommentForm';

function EpisodePage({userId}) {
    const [episodeComments, setEpisodeComments] = useState([]);
    const { id } = useParams();
    const [episodeData, setEpisodeData] = useState({});

    useEffect(() => {
        async function getEpisode() {
            try {
                const response = await axios.get(`http://localhost:8002/api/episodes/${id}/comments`);
                setEpisodeComments(response.data);
                } catch (error) {
                    console.error('Error fetching episode:', error);
                }
            }
            getEpisode();
        }, [id]);

    
    useEffect(() => {
        async function getEpisodes() {
            const response = await axios.get(`http://localhost:8002/api/episodes/${id}`);
            setEpisodeData(response.data);
        }
        getEpisodes();
        } , [id]);


        return (
                <section className="page__main">
                    <iframe
                        key={episodeData.id}
                        title={episodeData.title}
                        src={`https://open.spotify.com/embed/episode/${episodeData.id}?utm_source=generator&theme=0`}
                        width="92%"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        height="352" 
                    ></iframe>
                            <CommentForm episodeId={episodeData.id} userId={userId} />
                {episodeComments.length > 0 ? (
                    episodeComments.map((item) => (
                        <div key={item.id}>
                            <p>{item.first_name} {item.last_name}</p>
                            <p>{new Date(item.timestamp).toLocaleDateString()}</p>
                            <p>{item.content}</p>
                        </div>
                    ))
                ) : (
                    <p>Be the first to write a comment!</p>
                )}
                </section>
        );

}
export default EpisodePage;