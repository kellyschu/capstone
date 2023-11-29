import "./Sidebar.scss";
import '@material-design-icons/font/sharp.css'
import { NavLink } from 'react-router-dom';

function Sidebar({userId}) {

    return (
        <section className="sidebar">
            <div className="sidebar-section">
                <NavLink prefetch className="sidebar-selector__non-active" to="/" style={{ textDecoration: 'none' }}>
                    <span class="material-icons-sharp">mic</span>
                    <h1>PODSTREAM</h1>
                </NavLink>
                <NavLink prefetch className="sidebar-selector" to="/" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">home</span>
                    <h2>Home</h2>
                </NavLink>
                <NavLink  prefetch className="sidebar-selector" to="/search" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">search</span>
                    <h2>Search</h2>
                </NavLink>
            </div>
            <div className="sidebar-section">
                <NavLink exact className="sidebar-selector"  to={`/mylibrary/${userId}`} style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">import_contacts</span>
                    <h2>Your Library</h2>
                </NavLink>
            </div>
            <div className="sidebar-section">
                <NavLink exact className="sidebar-selector"  to="/categories" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">dashboard</span>
                    <h2>Categories</h2>
                </NavLink>
                <NavLink className="sidebar-selector"  to="/mostsaved" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">bookmark</span>
                    <h2>Most Saved</h2>
                </NavLink>
                <NavLink className="sidebar-selector"  to="/mostloved" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">volunteer_activism</span>
                    <h2>Most Loved</h2>
                </NavLink>
                <NavLink className="sidebar-selector"  to="/mosttalkedabout" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">forum</span>
                    <h2>Most Talked About</h2>
                </NavLink>
                <NavLink className="sidebar-selector"  to="/somethingnew" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">autorenew</span>
                    <h2>Something New</h2>
                </NavLink>
            </div>
        </section>
    );
}

export default Sidebar;


