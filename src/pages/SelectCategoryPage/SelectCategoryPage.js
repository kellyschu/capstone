import "./SelectCategoryPage.scss";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";


function SelectCategoryPage() {
    const { category } = useParams();
    const [categoryEpisodes, setCategoryEpisodes] = useState([]);

    useEffect(() => {
        async function getEpisodes() {
            try {
                const response = await axios.get(`http://localhost:8002/api/episodes/category/${category}`);
                setCategoryEpisodes(response.data);
                console.log(response.data, "response.data");
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        }
        getEpisodes();
    }, [category]);

    return (
        <section className="page__main">
            <h1>SELECT Category Page</h1> 
            <div className="episode-card__container">
            {categoryEpisodes ? (
                Object.values(categoryEpisodes).map((episode) => (
                    <NavLink to={`/episode/${episode.id}`} key={episode.id}>
                        <div className="episode-card">
                        {/* <img src={placeholder} alt="img"/> */}
                        <h3 className="episode-card__title">{episode.title.substring(0, 43)}{episode.title.length > 40 ? '...' : ''}</h3>
                        <p>{episode.channel}</p>
                        </div>
                    </NavLink>
                ))
            ) : (
                <p>Loading episodes...</p>
            )}
            </div>
        </section>
    );
}
export default SelectCategoryPage;
