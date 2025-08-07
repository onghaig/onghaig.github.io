import MyFace from "./myface";
import YaleIcon from "../assets/Yale_University_Shield.png";

export default function AboutMe() {
  return (
    <section id="about" className="relative px-8 py-32 flex items-center lg:flex-row">
        <div className="flex flex-col items-start max-w-3xl">
          <h1 className="text-4xl font-bold">Hi there, I'm Gavin! <img src={YaleIcon} alt="" aria-hidden="true"
          className="inline-block h-[2em] w-[2em] align-text-bottom gap-1" /></h1>
        <h3 className="text-xl text-left font-light max-w-3xl mt-4 indent-10 ">
          My name is Gavin Ong Hai (王海加文), and I am a sophomore at Yale University
          studying Electrical Engineering and Computer Science. Much of my past
          work has been in material science and chemistry. Currently, I am more
          interested in working on software and hardware development, as well as
          learning about financial markets. I hope you enjoy looking through my
          website!
        </h3>
        </div>
      <MyFace/>
    </section>
  );
}
