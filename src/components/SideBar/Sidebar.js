import "./Sidebar.scss";

function Sidebar() {
    return (
        <section className="sidebar">
            <div className="sidebar-section">
                <h1>PODSTREAM</h1>
                <h2>Home</h2>
                <h2>Search</h2>
            </div>
            <div className="sidebar-section">
                <h2>Your Library</h2>
            </div>
            <div className="sidebar-section">
                <h2>Categories</h2>
                <h2>Most Played</h2>
                <h2>Most Loved</h2>
                <h2>Most Talked About</h2>
                <h2>Something New</h2>
            </div>

        </section>
    );
}

export default Sidebar;