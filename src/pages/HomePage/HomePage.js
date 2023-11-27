import "./HomePage.scss";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import axios from "axios";
import { useState, useEffect } from "react";



function HomePage() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function getEpisode() {
        try {
            const response = await axios.get(`http://localhost:8002/api/episodes/`);
            setEpisodes(response.data);
        } catch (error) {
            console.error('Error fetching episode:', error);
        }
    };
    getEpisode();
}, episodes);

    return (
            <section className="page__main">
                <div className="card__container">
                    <h3>Crime Podcasts</h3>
                    <div className="episode-card__container">
                    <EpisodeCard episodes={episodes}/>
                    </div>
                </div>
                <div className="card__container">
                    <h3>Crime Podcasts</h3>
                    <div className="episode-card__container">

                    <EpisodeCard episodes={episodes}/>
                    </div>

                </div>
            </section>
    );
}
export default HomePage;