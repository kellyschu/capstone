import "./EpisodeCard.scss";
import { NavLink } from "react-router-dom";

function EpisodeCard({ key, episodes }) {
    return (
        <>
            {episodes ? (
                Object.values(episodes).map((episode) => (
                    <NavLink to={`/episode/${episode.id}`} style= { { textDecoration: 'none' }} key={key}>
                        <div className="episode-card">
                        {/* <img src={placeholder} alt="img"/> */}
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