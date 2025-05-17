import ProjectsProps from "@/interfaces/ProjectsProps";
import Image from "@/assets/EncarnacionStudiosLandingPage.jpeg";
import NotFond from "@/assets/Image-not-found.png"
import { ProjectsCard } from "@/components/ProjectsCard";

export default function Projects() {
  const ProjectsList: ProjectsProps[] = [
    { name: "Encarnacion Studios Landing Page", image: Image, pageLink: "https://encarnacionstudios.netlify.app/"  },
    { name: "Coming Soon!", image: NotFond },
    { name: "Coming Soon!", image: NotFond },
    { name: "Coming Soon!", image: NotFond },
    { name: "Coming Soon!", image: NotFond },
  ];
  return (
    <>
      <section id="projects" className="w-screen min-h-screen px-4 py-6 flex items-center mt-14 justify-center flex-col">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">My Projects</h2>
          <p>A selection of my most notable projects.</p>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
          {ProjectsList.map((project, key) => (
            <div key={key} className="flex justify-center items-center w-full">
              <ProjectsCard name={project.name} image={project.image} pageLink={project.pageLink} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
