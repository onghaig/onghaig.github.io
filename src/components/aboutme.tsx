import MyFace from "./myface";

export default function AboutMe() {
  return (
    <section id="about" className="relative px-4 lg:px-8 py-16 lg:py-32 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
        <div className="flex flex-col items-center lg:items-start max-w-3xl text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Hi there, I'm Gavin! </h1>
        <h3 className="text-lg lg:text-xl text-center lg:text-left font-light max-w-3xl mt-4 lg:indent-10 leading-relaxed">
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
