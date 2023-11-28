import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryCard.scss';


function CategoryCard() {
    return (
        <div>
            <div className="category-card__container">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <NavLink key={index} style= { { textDecoration: 'none' }} className="category-card" to={`/categories/${index}`}>
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
