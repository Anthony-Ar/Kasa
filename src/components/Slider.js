import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../assets/components/banner.scss";
import "../assets/components/slider.scss";

export default function Slider(props) {
    const [slide, setSlide] = useState(0);

    const previous = () => {
        setSlide(slide === 0 ? props.pictures.length-1 : slide-1)
    }

    const next = () => {
        setSlide(slide === props.pictures.length-1 ? 0 : slide+1)
    }

    if(props.pictures.length > 1) {
        return (
            <div className="banner b-xl">
                <img src={props.pictures[slide]} alt={props.title} />
                <div className="arrow">
                    <FontAwesomeIcon className="arrow-left" icon={faChevronLeft} onClick={previous}/>
                    <FontAwesomeIcon className="arrow-right" icon={faChevronRight} onClick={next}/>
                </div>
                <p className="slide-count">{slide+1}/{props.pictures.length}</p>
            </div>
        )
    } else {
        return (<div className="banner b-xl"><img src={props.pictures[0]} alt={props.title} /></div>)
    }
}