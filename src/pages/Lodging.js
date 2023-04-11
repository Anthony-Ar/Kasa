import { useParams } from "react-router-dom";
import { Collapse, Slider } from "../components";
import data from "../data/lodging.json";
import NotFound from "./NotFound";
import "../assets/pages/lodging.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Lodging() {
    const lodging = useParams();
    const item = data.find(e => e.id === lodging.id);

    if(item) {
        const listEquipments = item.equipments.map((e) =>
            <li key={e}>{e}</li>
        )

        const Rating = () => {
            let rate = [];
            for(let i = 0; i < 5; i++) {
                rate.push(<FontAwesomeIcon key={i} icon={faStar} className={i < item.rating ? "" : "disabled"} />)
            }
            return rate; 
        }
        
        return (
            <>
            <Slider
                pictures={item.pictures}
                title={item.title}
            />

            <div className="lodging-infos">
                <div className="block">
                    <p className="title">{item.title}</p>
                    <p className="location">{item.location}</p>
                    <div className="tags">
                        {item.tags.map(e => 
                            <span key={e} className="tag">{e}</span>
                        )}
                    </div>
                </div>

                <div className="block">
                    <div className="profil">
                        <p>{item.host.name}</p>
                        <img src={item.host.picture} alt={item.host.name} />
                    </div>
                    <div className="rating">
                        <Rating />
                    </div>
                </div>
            </div>

            <div className="lodging-collapse">
                <Collapse 
                    title="Description"
                    content={item.description}
                    isOpen={window.innerWidth < 768 ? false : true}
                />
                <Collapse 
                    title="Équipements"
                    content={listEquipments}
                    isOpen={true}
                />
            </div>
            </>
        )

    } 

    return <NotFound />;
}