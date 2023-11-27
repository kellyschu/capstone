// import "./MostPlayedPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";

function MostPlayedPage() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function getEpisodes() {
            try {
                const response = await axios.get(`http://localhost:8002/api/episodes`);
                setEpisodes(response.data);
            } catch (error) {
                console.error('Error fetching episode:', error);
            }
        };
        getEpisodes();
    }, []);

    const filteredEpisodes = episodes.reduce((acc, episode) => {
        const existingEpisode = acc.find(item => item.saves === episode.saves);
        if (existingEpisode) {
            existingEpisode.count++;
        } else {
            acc.push({ ...episode, count: 1 });
        }
        return acc;
    }, []).sort((a, b) => b.saves - a.saves);

    return (
        <section className="page__main">
            <h1>Most Saved Page</h1>
            <div className="episode-card__container">
                <EpisodeCard episodes={filteredEpisodes} />
            </div>
        </section>
    );
}
export default MostPlayedPage;