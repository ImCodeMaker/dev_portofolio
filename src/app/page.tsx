import NavigationBar from "@/features/NavigationBar";
import Home from "@/features/Home";
import AboutMe from "@/features/AboutMe";
import Projects from "@/features/Projects";

export default function Page() {
  return (
    <div className="w-screen min-h-screen">
      <NavigationBar />
      <main>
        <Home />
        <AboutMe />
        <Projects/>
      </main>
    </div>
  );
}