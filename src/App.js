import { Header, Footer } from "./layouts";
import { Routes } from "./Routes";
import "./assets/global.scss";

export default function App() {
    return (
        <>
        <Header />
        <main>
            <Routes />
        </main>
        <Footer />
        </>
    );
}