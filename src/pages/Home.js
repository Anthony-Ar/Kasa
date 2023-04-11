import "../assets/pages/home.scss";
import bannerImg from "../assets/images/home.png";
import data from "../data/lodging.json";
import { Link } from "react-router-dom";
import { Banner } from "../components";

export default function Home() {
    return (
        <>
        <Banner
            size='sm'
            imgSrc={bannerImg}
            imgDark={true}
            content='Chez vous, partout et ailleurs'
        />
        
        <section id="lodging">
            {data.map((item) => 
                <Link key={item.id} to={"lodging/"+item.id}>
                    <figure>
                        <img src={item.cover} alt={item.title} />
                        <figcaption><h2>{item.title}</h2></figcaption>
                    </figure>
                </Link>
            )}
        </section>
        </>
    )
}