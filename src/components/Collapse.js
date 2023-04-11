import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../assets/components/collapse.scss";

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    return (
        <div className={isOpen ? "collapse" : "collapse close"}>
            <div className="collapse-title" onClick={() => setIsOpen(isOpen ? false : true)}>
                <h2>{props.title}</h2>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>

            <div className={isOpen ? "collapse-content" : "collapse-content close"}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}