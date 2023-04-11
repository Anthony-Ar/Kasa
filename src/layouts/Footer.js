import logo from "../assets/images/logo.png";
import "../assets/layouts/footer.scss";

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="Kasa" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}