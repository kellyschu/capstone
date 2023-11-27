import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
// import "./MostCommentedPage.scss";

function MostCommentedPage() {
    return (
            <section className="page__main">
                <h1>Most Commented Page</h1>
                    <div className="episode-card__container">

                <EpisodeCard />
                </div>
            </section>
    );
}

export default MostCommentedPage;