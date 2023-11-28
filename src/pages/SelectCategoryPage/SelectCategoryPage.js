import "./SelectCategoryPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../components/EpisodeCard/EpisodeCard.scss";

function SelectCategoryPage() {
    const { category } = useParams();
    const [categoryEpisodes, setCategoryEpisodes] = useState([]);

    useEffect(() => {
        async function getEpisodes() {
            try {
                const response = await axios.get(`http://localhost:8002/api/episodes/category/${category}`);
                setCategoryEpisodes(response.data);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        }
        getEpisodes();
    }, [category]);
    
    const getCardColorClass = (index) => {
        return index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'grey' : 'white';
    };

    return (
        <section className="page__main">
            <div className="card__container">

            <div className="episode-card__container">
            {categoryEpisodes ? (
                Object.values(categoryEpisodes).map((episode, index) => (
                    <NavLink to={`/episode/${episode.id}`} style= { { textDecoration: 'none' }}  key={episode.id}>
                        <div className={`episode-card ${getCardColorClass(index)}`}>
                        <h2 className="episode-card__title">{episode.title.substring(0, 30)}{episode.title.length > 33 ? '...' : ''}</h2>
                        <p>{episode.channel}</p>
                        </div>
                    </NavLink>
                ))
            ) : (
                <p>Loading episodes...</p>
            )}
            </div>
            </div>
        </section>
    );
}
export default SelectCategoryPage;
