import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <div id="home" className="w-screen h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold tracking-wide text-4xl  drop-shadow-lg hover:drop-shadow-2xl text-black">
            Hello! I&apos;m Teudy!
          </h2>
          <div className="flex items-center justify-center text-center mt-2 drop-shadow-2xl">
            <p className="text-black text-xl font-normal tracking wide hyphens-manual ">
              A Junior <strong>Software Developer</strong> passionate about{" "}
              <strong>Web Development</strong>, <strong>UI/UX Design</strong>,
              and crafting creative solutions.
            </p>
          </div>
          <div className="mt-3">
            <Button label="Lets Begin!" color="bg-black"/>
          </div>
        </div>
      </div>
    </>
  );
}
