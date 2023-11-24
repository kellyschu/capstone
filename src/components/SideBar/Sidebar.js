import "./Sidebar.scss";
import '@material-design-icons/font/sharp.css'
import { NavLink, useLocation } from 'react-router-dom';

function Sidebar() {
    // const location = useLocation();
    // const warehouseIsActive = () => {
    //     return location.pathname === '/' || location.pathname.startsWith('/warehouses');
    // };

    // const inventoryIsActive = () => {
    //     return location.pathname.startsWith('/inventory');
    // };

    return (
        <section className="sidebar">
            <div className="sidebar-section">
                <NavLink className="sidebar-selector__non-active" to="/home" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">mic</span>
                    <h1>PODSTREAM</h1>
                </NavLink>
                <NavLink exact className="sidebar-selector" to="/home" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">home</span>
                    <h2>Home</h2>
                </NavLink>
                <NavLink exact className="sidebar-selector"  to="/home" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">search</span>
                    <h2>Search</h2>
                </NavLink>

            </div>
            <div className="sidebar-section">
                <NavLink exact className="sidebar-selector"  to="/home" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">import_contacts</span>
                    <h2>Your Library</h2>
                </NavLink>
            </div>
            <div className="sidebar-section">
                <NavLink exact className="sidebar-selector"  to="/home" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">dashboard</span>
                    <h2>Categories</h2>
                </NavLink>
                <NavLink className="sidebar-selector"  to="/" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">access_time_filled</span>
                    <h2>Most Played</h2>
                </NavLink>
                <NavLink className="sidebar-selector"  to="/" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">volunteer_activism</span>
                    <h2>Most Loved</h2>
                </NavLink>
                <NavLink className="sidebar-selector"  to="/" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">forum</span>
                    <h2>Most Talked About</h2>
                </NavLink>
                <NavLink className="sidebar-selector"  to="/" style={{ textDecoration: 'none', color: "white" }}>
                    <span class="material-icons-sharp">autorenew</span>
                    <h2>Something New</h2>
                </NavLink>
            </div>
        </section>
    );
}

export default Sidebar;


