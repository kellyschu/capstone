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
                        <h2  className="episode-card__title">{episode.title.substring(0, 30)}{episode.title.length > 33 ? '...' : ''}</h2>
                        <p>{episode.channel}</p>
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