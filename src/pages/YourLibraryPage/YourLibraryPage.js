import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
// import Header from "../../components/Header/Header";



function YourLibraryPage({user}) {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`http://localhost:8002/api/users/${user}`);
                setUserData(response);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
        console.log(userData, "userdata");
    }, [user]);

    return (
        <section className="page__main">
            <div className="card__container">
                <h3>Crime Podcasts</h3>
            </div>
            <div className="card__container">
                <h3>Crime Podcasts</h3>
            </div>
        </section>
    );
}
export default YourLibraryPage;
            