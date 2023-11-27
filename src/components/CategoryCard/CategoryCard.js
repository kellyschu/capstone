import "./CategoryCard.scss";
import { NavLink } from "react-router-dom";


function CategoryCard() {
    
    return (
        <div className="category-card__container">
            <NavLink className="category-card" to="/categories/1"><h2>Business & Entrepreneurship</h2></NavLink>
            <NavLink className="category-card" to="/categories/2"><h2>Technology</h2></NavLink>
            <NavLink className="category-card" to="/categories/3"><h2>Health & wellness</h2></NavLink>
            <NavLink className="category-card" to="/categories/4"><h2>Sports</h2></NavLink>
            <NavLink className="category-card" to="/categories/5"><h2>Arts & Entertainment</h2></NavLink>
            <NavLink className="category-card" to="/categories/6"><h2>New & Politics</h2></NavLink>
            <NavLink className="category-card" to="/categories/7"><h2>True Crime</h2></NavLink>
            <NavLink className="category-card" to="/categories/8"><h2>Comedy</h2></NavLink>
        </div>
    );
}

export default CategoryCard;