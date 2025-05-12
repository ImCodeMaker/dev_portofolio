import Image from "next/image";
import PeopleImage from "@/assets/image_template.jpeg";

export default function AboutMe() {
  return (
    <section id="about" className="w-full px-4 py-6 mt-10 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-black tracking-wide mb-6">
        About Me
      </h2>
      <div className="flex flex-col sm:flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0">
        <div className="flex-shrink-0">
          <Image
            src={PeopleImage}
            alt="Portrait of Joshua"
            height={250}
            width={250}
            className="rounded-md object-cover drop-shadow-2xl transition delay-150 duration-300 ease-in-out hover:traslate-y-1 hover:scale-110"
          />
        </div>
        <div>
          <p className="text-black font-medium tracking-wide text-base max-w-96 leading-relaxed">
            Hello, I am Teudy. I am a student at the{" "}
            <strong>Instituto Tecnológico de las Américas (ITLA)</strong>, one
            of the most versatile institutes in the Dominican Republic, where I
            reside. I&aposve been passionate about technology since childhood, and
            that passion has led me to develop websites and applications. In my
            free time, I&aposm also a pianist—I enjoy composing and improvising
            music. I love basketball and baseball, and I&aposm always eager to
            explore, learn new things, and challenge myself.
          </p>
        </div>
      </div>
    </section>
  );
}
