import "./SelectCategoryPage.scss";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import axios from "axios";
import { useState, useEffect } from "react";


function SelectCategoryPage() {
    const [episodes, setEpisodes] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        async function getEpisodes() {
            try {
                const response = await axios.get(`http://localhost:8002/api/episodes/category/${category}`);
                setEpisodes(response.data);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        }
        getEpisodes();
        console.log(episodes, "episodes");
    }, [category]);

    // Filter episodes by category
    useEffect(() => {
        const filteredEpisodes = episodes.filter(episode => episode.category === category);
        // Use the filtered episodes as needed
        console.log(filteredEpisodes);
    }, [episodes, category]);

    return (
        <section className="page__main">
            <h1>SELECT Category Page</h1>  
            <EpisodeCard />
        </section>
    );
}
export default SelectCategoryPage;