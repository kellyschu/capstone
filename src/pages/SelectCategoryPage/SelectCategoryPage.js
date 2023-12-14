import "./SelectCategoryPage.scss";
import '@material-design-icons/font/sharp.css'
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
        return index % 3 === 0 ? 'grey' : index % 3 === 1 ? 'white' : 'blue';
    };
                        
    

    return (
        <section className="page__main">
                        <h1>
                            {category === '1' && 'Business & Entrepreneurship '}
                            {category === '2' && 'Technology '}
                            {category === '3' && 'Health & wellness '}
                            {category === '4' && 'Sports '}
                            {category === '5' && 'Arts & Entertainment '}
                            {category === '6' && 'News & Politics '}
                            {category === '7' && 'True Crime '}
                            {category === '8' && 'Comedy '}
                            Podcasts
                        </h1>
            <div className="episode-card__container">
            {categoryEpisodes ? (
                Object.values(categoryEpisodes).map((episode, index) => (
                    <NavLink to={`/episode/${episode.id}`} style= { { textDecoration: 'none' }}  key={episode.id}>
                        <div className={`episode-card ${getCardColorClass(index)}`}>
                        <span class="material-icons-sharp">podcasts</span>
                        <h3 className="episode-card__title">{episode.title.substring(0, 31)}{episode.title.length > 35 ? '...' : ''}</h3>
                        <p>{episode.channel.substring(0, 24)}{episode.channel.length > 24 ? '...' : ''}</p>
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
