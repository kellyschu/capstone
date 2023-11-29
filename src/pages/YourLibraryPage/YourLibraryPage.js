import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";

function YourLibraryPage() {
    const [userData, setUserData] = useState();
    const {id} = useParams();

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`http://localhost:8002/api/users/${id}`);
                setUserData(response.data);
                
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [id]);

    const slicedEpisodes = userData ? userData.slice(0, 18) : [];

    return (
        <section className="page__main">
            <h1>{userData ? `${userData[0].first_name}'s Podcasts` : 'Loading...'}</h1>
            <div className="episode-card__container">
                <EpisodeCard episodes={slicedEpisodes.slice(0, 5)} />
            </div>

            <div className="episode-card__container">
                <EpisodeCard episodes={slicedEpisodes.slice(6, 12)} />
            </div>

            <div className="episode-card__container">
                <EpisodeCard episodes={slicedEpisodes.slice(12, 18)} />
            </div>
        </section>
    );
}
export default YourLibraryPage;