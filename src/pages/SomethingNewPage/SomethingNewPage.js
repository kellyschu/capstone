import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import "./SomethingNewPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";


function SomethingNewPage() {
    const [episodes, setEpisodes] = useState([]);

    const getEpisodes = async () => {
        try {
            const response = await axios.get('http://localhost:8002/api/episodes');
            const shuffledEpisodes = [...response.data].sort(() => Math.random() - 0.5);
            const selectedEpisodes = shuffledEpisodes.slice(0, 16);
            setEpisodes(selectedEpisodes);
        } catch (error) {
            console.error('Error fetching episodes:', error);
        }
    }

    useEffect(() => {
        getEpisodes();
    }, []);

    return (
        <section className="page__main">
            <div className="random-button" onClick={getEpisodes}>
                <span className="material-icons-sharp">autorenew</span>
                <h2>Show Me Something New</h2>
            </div>
            <div className="episode-card__container">
                <EpisodeCard episodes={episodes.slice(0, 5)} />
            </div>
            <div className="episode-card__container">

                <EpisodeCard episodes={episodes.slice(6, 11)} />
            </div>
            <div className="episode-card__container">
                <EpisodeCard episodes={episodes.slice(11, 16)} />
            </div>
        </section>
    );
}
export default SomethingNewPage;