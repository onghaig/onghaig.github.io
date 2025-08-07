import myFace from "../assets/myface.jpg";

export default function MyFace() {
    return (
        <img 
            src={myFace}
            alt="Gavin Ong Hai"
            className="items-start wrap-anywhere rounded-full w-96 h-128 object-cover ml-12"
          />
    )
}