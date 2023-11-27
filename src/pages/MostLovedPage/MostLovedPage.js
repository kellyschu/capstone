import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
// import "./MostLovedPage.scss";

function MostLovedPage() {
    return (
        <section className="page__main">
            <h1>Most Loved Page</h1>
            <div className="episode-card__container">

            <EpisodeCard />
            </div>
        </section>
    );
}

export default MostLovedPage;

