import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EpisodePage() {
    const [episode, setEpisode] = useState(null);
    const { id } = useParams();

        useEffect(() => {
        const getEpisode = async () => {
            try {
                const response = await axios.get(`http://localhost:8002/api/episodes/${id}/comments`);
                setEpisode(response.data);
            } catch (error) {
                console.error('Error fetching episode:', error);
            }
        };
        getEpisode();
        console.log('Episode:', episode);
    }, [id]);


        return (
            <div>
                <h1>Episode Page</h1>
                {episode && episode.map((item) => (
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