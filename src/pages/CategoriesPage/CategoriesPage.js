// import "./CategoriesPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";



function CategoriesPage() {
    const [episodes, setEpisodes] = useState({});

    useEffect(() => {
        async function getEpisodes() {
            try {
                const response = await axios.get(`http://localhost:8002/api/episodes`);
                setEpisodes(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getEpisodes();
    }, []);



    return (
        <section className="page__main">
            <span className="material-icons-sharp">collections</span>
            <h1>Categories Page</h1>

            {Object.keys(episodes).length === 0 ? (
                <p>Categories loading...</p>
            ) : (
                <CategoryCard episodes={episodes} />
            )}
        </section>
    );
}
export default CategoriesPage;