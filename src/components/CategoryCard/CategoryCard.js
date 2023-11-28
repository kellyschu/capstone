import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryCard.scss';


function CategoryCard() {
    return (
        <div>
            <div className="category-card__container">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <NavLink key={index} style= { { textDecoration: 'none' }} className="category-card" to={`/categories/${index}`}>
                        <span class="material-icons-sharp">
                            {index === 1 && 'business'}
                            {index === 2 && 'devices'}
                            {index === 3 && 'local_hospital'}
                            {index === 4 && 'sports_basketball'}
                            {index === 5 && 'theater_comedy'}
                            {index === 6 && 'article'}
                            {index === 7 && 'emoji_people'}
                            {index === 8 && 'emoji_emotions'}
                        </span>
                        <h3>
                            {index === 1 && 'Business & Entrepreneurship'}
                            {index === 2 && 'Technology'}
                            {index === 3 && 'Health & wellness'}
                            {index === 4 && 'Sports'}
                            {index === 5 && 'Arts & Entertainment'}
                            {index === 6 && 'News & Politics'}
                            {index === 7 && 'True Crime'}
                            {index === 8 && 'Comedy'}
                        </h3>
                    </NavLink>
            ))}
            </div>
        </div>
    );
};

export default CategoryCard;
