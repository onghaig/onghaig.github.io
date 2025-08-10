import myFace from "../assets/myface.png";
import YaleIcon from "../assets/Yale_University_Shield.png";

export default function MyFace() {
    return (
        <div className="relative flex justify-center lg:justify-start items-center h-90">
        <img 
            src={myFace}
            alt="Gavin Ong Hai"
            className="w-64 h-80 lg:w-96 lg:h-128 object-cover rounded-2xl lg:rounded-3xl lg:ml-12"
          />
        <img src={YaleIcon} alt="Yale University Emblem" aria-hidden="true"
          className="absolute right-0 top-68 lg:left-65 lg:top-85 fill-white bg-white border-1 rounded-lg h-16 w-16 lg:h-24 lg:w-24" />
        </div>
    )   
}