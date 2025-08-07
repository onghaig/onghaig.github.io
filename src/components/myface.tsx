import myFace from "../assets/myface.png";

export default function MyFace() {
    return (
        <div className="relative">
        <img 
            src={myFace}
            alt="Gavin Ong Hai"
            className="items-start wrap-anywhere rounded-4xl w-96 h-128 object-cover ml-12"
          />
        </div>
    )   
}