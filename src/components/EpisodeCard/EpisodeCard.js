import "./EpisodeCard.scss";
import { NavLink } from "react-router-dom";

function EpisodeCard({ episodes }) {
    return (
        <div className="episode-card__container">
            {episodes ? (
                Object.values(episodes).map((episode) => (
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
    );
}

export default EpisodeCard;