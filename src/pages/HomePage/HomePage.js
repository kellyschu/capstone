import "./HomePage.scss";
import RandomizedList from "../../components/RandomizedList/RandomizedList";
import MostLiked from "../../components/MostLiked/MostLiked";
import GenreList from "../../components/GenreList/GenreList";
import MostCommented from "../../components/MostCommented/MostCommented";

function HomePage() {
    return (
        <div className="HomePage">
            <MostCommented />
            <RandomizedList />
            <MostLiked />
            <GenreList />          
        </div>
    );
}
export default HomePage;