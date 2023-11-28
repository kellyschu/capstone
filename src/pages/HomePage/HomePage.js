import "./HomePage.scss";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import axios from "axios";
import { useState, useEffect } from "react"



function HomePage() {
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

    const filteredLikedEpisodes = episodes.reduce((acc, episode) => {
        const existingEpisode = acc.find(item => item.likes === episode.likes);
        if (existingEpisode) {
            existingEpisode.count++;
        } else {
            acc.push({ ...episode, count: 1 });
        }
        return acc;
    }, []).sort((a, b) => b.likes - a.likes);

    const filteredSavedEpisodes = episodes.reduce((acc, episode) => {
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
                <div className="card__container">
                    <h1>Most Liked Podcasts</h1>
                    <div className="episode-card__container">
                    <EpisodeCard episodes={filteredLikedEpisodes}/>
                    </div>
                </div>
                <div className="card__container">
                    <h1>Most Saved Podcasts</h1>
                    <div className="episode-card__container">
                    <EpisodeCard episodes={filteredSavedEpisodes}/>
                    </div>
                </div>
            </section>
    );
}
export default HomePage;