import "./CategoryCard.scss";
import { NavLink } from "react-router-dom";


function CategoryCard() {
    
    return (
        <div className="category-card__container">
            <NavLink className="category-card" to="/category/1"><p>Business & Entrepreneurship</p></NavLink>
            <NavLink className="category-card" to="/category/2"><p>Technology</p></NavLink>
            <NavLink className="category-card" to="/category/3"><p>Health & wellness</p></NavLink>
            <NavLink className="category-card" to="/category/4"><p>Sports</p></NavLink>
            <NavLink className="category-card" to="/category/5"><p>Arts & Entertainment</p></NavLink>
            <NavLink className="category-card" to="/category/6"><p>New & Politics</p></NavLink>
            <NavLink className="category-card" to="/category/7"><p>True Crime</p></NavLink>
            <NavLink className="category-card" to="/category/8"><p>Comedy</p></NavLink>
        </div>
    );
}

export default CategoryCard;