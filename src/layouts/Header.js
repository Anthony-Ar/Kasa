import { NavLink} from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/layouts/header.scss";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Kasa" />
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink>
            </nav>
        </header>
    )
}