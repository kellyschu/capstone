import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import Header from '../../components/Header/Header';
import './EpisodePage.scss'
import CommentForm from '../../components/CommentForm/CommentForm';

function EpisodePage() {
    //aray of comments
    const [episodeComments, setEpisodeComments] = useState([]);
    const { id } = useParams();
    // ooject of info about episode
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
            <div className='page__display-flex'>
                {/* <Header /> */}
                <section className='page__main'>
                    <iframe
                        key={episodeData.id}
                        title={episodeData.title}
                        // style="border-radius:12px" 
                        src={`https://open.spotify.com/embed/episode/${episodeData.id}?utm_source=generator&theme=0`}
                        width="92%"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        frameBorder="0" 
                        loading="lazy"
                        height="352" 
                    ></iframe>
                            <CommentForm />
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
            </div>
        );

}
export default EpisodePage;