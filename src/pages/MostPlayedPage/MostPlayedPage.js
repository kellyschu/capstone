import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
// import "./MostPlayedPage.scss";

function MostPlayedPage() {

    return (
        <section className="page__main">
            <h1>Most Played Page</h1>
            <div className="episode-card__container">

            <EpisodeCard />
            </div>
        </section>
    );
}
export default MostPlayedPage;