// import "./HomePage.scss";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";



function HomePage() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function getEpisode() {
        try {
            const response = await axios.get(`http://localhost:8002/api/episodes/`);
            setEpisodes(response.data);
        } catch (error) {
            console.error('Error fetching episode:', error);
        }
    };
    getEpisode();
}, episodes);

    return (
        <div className="home-page page__display-flex">
            <Header /> 
            <section className="page__main">
                <h1>Home Page</h1>  
                <EpisodeCard episodes={episodes}/>
            </section>
        </div>
    );
}
export default HomePage;