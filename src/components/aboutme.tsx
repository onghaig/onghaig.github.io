import MyFace from "./myface";

export default function AboutMe() {
  return (
    <section id="about" className="relative h-screen flex items-center lg:flex-row">
        <div className="flex flex-col items-start max-w-3xl">
          <h1 className="text-4xl font-bold">Hi there, I'm Gavin!</h1>
        <h2 className="text-xl text-left font-medium max-w-3xl mt-4 indent-10">
          My name is Gavin Ong Hai (王海), and I am a sophomore at Yale University
          studying Electrical Engineering and Computer Science. Much of my past
          work has been in material science and chemistry. Currently, I am more
          interested in working on software and hardware development, as well as
          learning about financial markets. I hope you enjoy looking through my
          website!
        </h2>
        </div>
      <MyFace/>
    </section>
  );
}
