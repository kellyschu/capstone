import axios from "axios";
import { useState, useEffect } from "react";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";

function MostSavedPage() {
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

    const slicedEpisodes1 = filteredEpisodes.slice(0, 6);
    const slicedEpisodes2 = filteredEpisodes.slice(7, 13);
    const slicedEpisodes3 = filteredEpisodes.slice(14, 22);

    return (
        <section className="page__main">
            <h1>Most Saved Page</h1>
            <div className="episode-card__container">
                <EpisodeCard episodes={slicedEpisodes1} />
            </div>
            <div className="episode-card__container">
                <EpisodeCard episodes={slicedEpisodes2} />
            </div>
            <div className="episode-card__container">
                <EpisodeCard episodes={slicedEpisodes3} />
            </div>
        </section>
    );
}
export default MostSavedPage;