import { Link } from "react-router-dom";
import "../assets/pages/not-found.scss";

export default function NotFound() {
    return ( 
        <section id="not-found">
            <p class="title">404</p>
            <p class="subtitle">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
    )
}