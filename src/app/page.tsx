import NavigationBar from "@/features/NavigationBar";
import Home from "@/features/Home";
import AboutMe from "@/features/AboutMe";
import Projects from "@/features/Projects";
import Skills from "@/features/Skills";
import ContactInfo from "@/features/ContactInfo"
import Footer from "@/features/Footer";

export default function Page() {
  return (
    <div className="w-screen min-h-screen">
      <NavigationBar />
      <main>
        <Home />
        <AboutMe />
        <Projects/>
        <Skills/>
        <ContactInfo/>
        <Footer/>
      </main>
    </div>
  );
}