import '@material-design-icons/font/sharp.css'
import "./EpisodeCard.scss";
import { NavLink } from "react-router-dom";

function EpisodeCard({ key, episodes }) {
    const getCardColorClass = (index) => {
        return index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'grey' : 'white';
    };
    
    return (
        <>
            {episodes ? (
                Object.values(episodes).map((episode, index) => (
                    <NavLink to={`/episode/${episode.id}`} style= { { textDecoration: 'none' }} key={key}>
                        <div className={`episode-card ${getCardColorClass(index)}`}>
                        <span class="material-icons-sharp">podcasts</span>
                        <h3 className="episode-card__title">{episode.title.substring(0, 31)}{episode.title.length > 35 ? '...' : ''}</h3>
                        <p>{episode.channel.substring(0, 24)}{episode.channel.length > 25 ? '...' : ''}</p>
                        </div>
                    </NavLink>
                ))
            ) : (
                <p>Loading episodes...</p>
            )}
        </>
    );
}


export default EpisodeCard;