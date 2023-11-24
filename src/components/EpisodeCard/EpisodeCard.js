import "./EpisodeCard.scss";
// import placeholder from '../../assets/search.png';


function EpisodeCard({ episodes }) {
    return (
        <div className="episode-card__container">
            {episodes ? (
                Object.values(episodes).slice(0, 5).map((episode) => (
                    <div className="episode-card" key={episode.id}>
                        {/* <img src={placeholder} alt="img"/> */}
                        <h3 className="episode-card__title">{episode.title.substring(0, 43)}{episode.title.length > 40 ? '...' : ''}</h3>
                        <p>{episode.channel}</p>
                    </div>
                ))
            ) : (
                <p>Loading episodes...</p>
            )}
        </div>
    );
}

export default EpisodeCard;