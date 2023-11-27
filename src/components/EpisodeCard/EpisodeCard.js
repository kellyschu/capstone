import "./EpisodeCard.scss";
import { NavLink } from "react-router-dom";

function EpisodeCard({ key, episodes }) {
    return (
        <>
            {episodes ? (
                Object.values(episodes).map((episode) => (
                    <NavLink to={`/episode/${episode.id}`} key={key}>
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
        </>
    );
}

export default EpisodeCard;