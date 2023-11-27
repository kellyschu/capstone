import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
// import "./SearchPage.scss";

function SearchPage() {

    return (
        <section className="page__main">
            <h1>Search Page</h1>
            <div className="episode-card__container">

            <EpisodeCard />
            </div>
        </section>
    );
}
export default SearchPage;