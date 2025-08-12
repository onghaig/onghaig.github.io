import myFace from "../assets/myface.png";
import YaleIcon from "../assets/Yale_University_Shield.png";

export default function MyFace() {
    return (
        <div className="relative max-h-screen flex justify-center lg:justify-start">
        <img 
            src={myFace}
            alt="Gavin Ong Hai"
            className="w-64 h-80 lg:w-96 lg:h-128 object-cover rounded-2xl lg:rounded-xl lg:ml-12"
          />
        <img src={YaleIcon} alt="Yale University Emblem" aria-hidden="true"
          className="relative right-16 top-64 lg:right-23 lg:top-104 border-1 rounded-lg h-16 w-16 lg:h-24 lg:w-24" />
        </div>
    )   
}