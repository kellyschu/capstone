import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
// import Header from "../../components/Header/Header";




function YourLibraryPage() {
    const [userData, setUserData] = useState();
    const {id} = useParams();
    console.log(id, "id from params library page");

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`http://localhost:8002/api/users/${id}`);
                setUserData(response.data);
                
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [id]);

    return (
        <section className="page__main">
            <div className="card__container">
                <h3>{userData ? `${userData[0].first_name} ${userData[0].last_name} Podcasts` : 'Loading...'}</h3>
                <EpisodeCard episodes={userData}/>
            </div>
            {/* <div className="card__container">
                <h3>Crime Podcasts</h3>
            </div> */}

        </section>
    );
}
export default YourLibraryPage;


// {userData ? (
//     <div>
//         {/* Render user data here, for example: */}
//         <h1>{userData.name}</h1>
//         <p>{userData.email}</p>
//         {/* Add more fields as needed */}
//     </div>
// ) : (
//     <p>Loading user data...</p>
// )}
            