import myFace from "../assets/myface.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="relative h-screen ">
      <div className="flex flex-col items-start justify-around text-left px-8 py-16">
        <div className="flex items-center">
            <img
            src={myFace}
            alt="Gavin Ong Hai"
            className="rounded-full w-48 h-64 object-cover"
          />
          <h1 className="text-4xl font-bold">Hi there, I'm Gavin!</h1>
        </div>

        <h2 className="text-xl font-medium max-w-9xl">
          My name is Gavin Ong Hai (王海), and I am a sophomore at Yale University
          studying Electrical Engineering and Computer Science. Much of my past
          work has been in material science and chemistry. Currently, I am more
          interested in working on software and hardware development, as well as
          learning about financial markets. I hope you enjoy looking through my
          website!
        </h2>
      </div>
    </section>
  );
}
