import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
// import "./SomethingNewPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";


function SomethingNewPage() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function getEpisodes() {
            try {
                const response = await axios.get('http://localhost:8002/api/episodes');
                const shuffledEpisodes = [...response.data].sort(() => Math.random() - 0.5);
                const selectedEpisodes = shuffledEpisodes.slice(0, 8);
                setEpisodes(selectedEpisodes);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        }

        getEpisodes();
    }, []);

    return (
        <section className="page__main">
            <h1>episodes you might like</h1>
            <div className="episode-card__container">
                <EpisodeCard episodes={episodes} />
            </div>
        </section>
    );
}
export default SomethingNewPage;