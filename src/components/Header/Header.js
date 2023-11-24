import "./Header.scss";
import icon from "../../assests/icons/menu-dots-vertical.svg"

function Header() {
    return (
        <div className="header">
            <h1>Welcome, User</h1>
            <h3><img src={icon} alt="img"/> Username</h3>
        </div>
    );
}

export default Header;