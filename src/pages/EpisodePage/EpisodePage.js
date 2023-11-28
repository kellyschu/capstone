import '@material-design-icons/font/sharp.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EpisodePage.scss'
import CommentForm from '../../components/CommentForm/CommentForm';

function EpisodePage({userId}) {
    const [episodeComments, setEpisodeComments] = useState([]);
    const { id } = useParams();
    const [episodeData, setEpisodeData] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

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

        const toggleLike = async () => {
            setIsLiked(!isLiked);
            setEpisodeData((prevData) => ({
                ...prevData,
                likes: isLiked ? prevData.likes - 1 : prevData.likes + 1,
            }));
            await axios.patch(`http://localhost:8002/api/episodes/${id}`, {
                likes: isLiked ? episodeData.likes - 1 : episodeData.likes + 1,
            }); 
        }

        const toggleSave = async () => {
            setIsSaved(!isSaved);
            setEpisodeData((prevData) => ({
                ...prevData,
                saves: isSaved ? prevData.saves - 1 : prevData.saves + 1,
            }));
            await axios.patch(`http://localhost:8002/api/episodes/${id}`, {
                saves: isSaved ? episodeData.saves - 1 : episodeData.saves + 1,
            }); 
        }
            

        return (
                <section className="page__main">
                    <iframe
                        key={episodeData.id}
                        title={episodeData.title}
                        src={`https://open.spotify.com/embed/episode/${episodeData.id}?utm_source=generator&theme=0`}
                        width="92%"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        height="352" 
                    ></iframe>
                    <section className="display-flex__inline justify-content__flex-end display-flex__inline--parent">
                    <div className="display-flex__inline align-items__center">
                        <span
                            className="material-icons-sharp"
                            style={{ cursor: 'pointer', display: isLiked ? 'none' : 'inline' }}
                            onClick={toggleLike}>
                            favorite_border
                        </span>
                        <span
                            className="material-icons-sharp button__clicked"
                            style={{ cursor: 'pointer', display: isLiked ? 'inline' : 'none' }}
                            onClick={toggleLike}>
                            favorite
                        </span>
                        <p>{episodeData.likes} Likes</p>
                    </div>
                    <div className="display-flex__inline align-items__center">
                        <span
                            className="material-icons-sharp"
                            style={{ cursor: 'pointer', display: isSaved ? 'none' : 'inline' }}
                            onClick={toggleSave}>
                            bookmark_border
                        </span>
                        <span
                            className="material-icons-sharp button__clicked"
                            style={{ cursor: 'pointer', display: isSaved ? 'inline' : 'none' }}
                            onClick={toggleSave}>
                            bookmark
                        </span>
                        <p>{episodeData.saves} Saves</p>
                    </div>
                    </section>
                    <div className='display-flex__inline justify-content__space-around'>
                        <section className='display-flex__column'>
                            <div className='data__comments'>
                            <CommentForm episodeId={episodeData.id} userId={userId} />
                            <div className='data__comments--content'>
                                {episodeComments.length > 0 ? (
                                    episodeComments.map((item) => (
                                        <div key={item.id}>
                                            <div className="display-flex__inline border-top justify-content__flex-end" >
                                                <h5>{item.first_name} {item.last_name}</h5>
                                                <p>{new Date(item.timestamp).toLocaleDateString()}</p>
                                            </div>
                                            <div>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <h3>Be the first to post a comment!</h3>
                                )
                            }
                            </div>
                            </div>
                        </section>
                        <section>
                            <div className='data__episodes display-flex__column'>
                                <h4>Podcast Channel</h4>
                                <p>{episodeData.channel}</p>
                                <h4>Episode Description</h4>
                                <p>{episodeData.description}</p>
                            </div>
                        </section>
                    </div>
                </section>

        );
    }

export default EpisodePage;
