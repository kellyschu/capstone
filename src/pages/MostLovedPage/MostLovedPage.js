import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import axios from "axios";
import { useState, useEffect } from "react";


function MostLovedPage() {
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
        const existingEpisode = acc.find(item => item.likes === episode.likes);
        if (existingEpisode) {
            existingEpisode.count++;
        } else {
            acc.push({ ...episode, count: 1 });
        }
        return acc;
    }, []).sort((a, b) => b.likes - a.likes);

    return (
        <section className="page__main">
            <h1>Most loved episodes</h1>
            <div className="episode-card__container">
                <EpisodeCard episodes={filteredEpisodes.slice(0, 6)} />
            </div>
            <div className="episode-card__container">
                <EpisodeCard episodes={filteredEpisodes.slice(7, 13)} />
            </div>
            <div className="episode-card__container">
                <EpisodeCard episodes={filteredEpisodes.slice(14, 22)} />
            </div>
        </section>
    );
}

export default MostLovedPage;

