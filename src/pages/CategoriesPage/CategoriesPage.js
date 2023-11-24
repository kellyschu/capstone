import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
// import "./CategoriesPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function CategoriesPage() {
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
        <div className="categories-page">
            <h1>Categories Page</h1>
            <EpisodeCard episodes={episodes}/>
        </div>
    );
}
export default CategoriesPage;