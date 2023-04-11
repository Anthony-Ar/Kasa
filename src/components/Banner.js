import "../assets/components/banner.scss";

export default function Banner(props) {
    return (
        <div className={"banner b-"+props.size}>
            <img src={props.imgSrc} className={props.imgDark ? "dark" : ""} alt="" />
            <p>{props.content ? props.content : ""}</p>
        </div>
    )
}