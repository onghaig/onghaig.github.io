import myFace from "../assets/myface.png";
import YaleIcon from "../assets/Yale_University_Shield.png";

export default function MyFace() {
    return (
        <div className="relative">
        <img 
            src={myFace}
            alt="Gavin Ong Hai"
            className="items-start wrap-anywhere rounded-4xl w-96 h-128 object-cover ml-12"
          />
        <img src={YaleIcon} alt="" aria-hidden="true"
          className="absolute right-0 top-100 fill-white bg-white border-1 rounded-lg h-24 w-24" />
        </div>
    )   
}