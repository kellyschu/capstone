import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';


function SearchPage() {
    const [episodes, setEpisodes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function getEpisodes() {
            try {
                const response = await axios.get('http://localhost:8002/api/episodes');
                setEpisodes(response.data);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        }
        getEpisodes();
    }, []);

    useEffect(() => {
        const filteredEpisodes = episodes.filter(episode => 
            episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            episode.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            episode.channel.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        const uniqueFilteredEpisodes = Array.from(new Set(filteredEpisodes.map(episode => episode.id)))
            .map(id => filteredEpisodes.find(episode => episode.id === id));
    
        setSearchResults(uniqueFilteredEpisodes);
    }, [searchTerm, episodes]);

    return (
    <section className="page__main">
        <h1>Search Page</h1>
            <input
                type="text"
                placeholder="Search episodes"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        <div className="episode-card__container">            
            <EpisodeCard episodes={searchResults} />
        </div>
    </section>
    );
}

export default SearchPage;
















