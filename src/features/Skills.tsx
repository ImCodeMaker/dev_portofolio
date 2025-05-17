'use client'

import { SkillCards } from "@/components/SkillsCards";
import SkillCardProps from "@/interfaces/SkillCardProps";
import JavaScriptLogo from "@/assets/JavaScript-logo.jpeg";
import TypeScriptLogo from "@/assets/TypescriptLogo.png"
import ReactLogo from "@/assets/ReactLogo.png"
import HTMLLogo from "@/assets/HTMLLogo.jpg"
import CSSLogo from "@/assets/CSSLogo.png"
import FigmaLogo from "@/assets/FigmaLogo.png"
import TailwindLogo from "@/assets/TailwindLogo.png"
import CSharpLogo from "@/assets/CSharpLogo.png"
import ExpressJS from "@/assets/ExpressLogo.png"
import NextJS from "@/assets/NextJS.png"
import PostgreSQL from "@/assets/PostgreSQL.png"
import SupabaseLogo from "@/assets/SupabaseLogo.png"
import Git from "@/assets/GitLogo.png"
import GithubLogo from "@/assets/GithubLogo.png"
import DockerLogo from "@/assets/Docker.jpg"
import VSLogo from "@/assets/VsLogo.jpeg"

export default function Skills() {
  const frontendSkills: SkillCardProps[] = [
    { text: "JavaScript", image: JavaScriptLogo },
    { text: "React", image: ReactLogo },
    { text: "Typescript", image: TypeScriptLogo },
    { text: "HTML5", image: HTMLLogo },
    { text: "CSS3", image: CSSLogo },
    { text: "Next JS", image: NextJS },
    { text: "Tailwind CSS", image: TailwindLogo },
    
  ];

  const backendSkills: SkillCardProps[] = [
    { text: "ASP.NET", image: CSharpLogo },
    { text: "Express JS", image: ExpressJS },
    { text: "Postgre SQL", image: PostgreSQL },
    { text: "Supbase", image: SupabaseLogo },
  ];

  const otherSkills: SkillCardProps[] = [
    { text: "Git", image: Git },
    { text: "Figma", image: FigmaLogo },
    { text: "Github", image: GithubLogo },
    { text: "Docker", image: DockerLogo },
    { text: "VS Code", image: VSLogo },
  ];

  return (
    <section id="skills" className="w-full min-h-screen  px-4 py-6 mt-14 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="text-gray-600">A summary of my skills and competencies.</p>
      </div>

      {/* Front-end Section */}
      <div className="mb-12">
        <h3 className="text-lg font-normal mb-6 text-center">Front-End</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {frontendSkills.map((skill, index) => (
            <div key={`front-${index}`} className="flex justify-center w-full sm:w-1/3 md:w-1/4 lg:w-1/4 px-2">
              <SkillCards {...skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8 max-w-4xl mx-auto"></div>

      {/* Back-end Section */}
      <div className="mb-12">
        <h3 className="text-lg font-normal mb-6 text-center">Back-End</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {backendSkills.map((skill, index) => (
            <div key={`back-${index}`} className="flex justify-center w-full sm:w-1/3 md:w-1/4 lg:w-1/4 px-2">
              <SkillCards {...skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8 max-w-4xl mx-auto"></div>

      {/* Other Skills Section */}
      <div>
        <h3 className="text-lg font-normal mb-6 text-center">Other</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {otherSkills.map((skill, index) => (
            <div key={`other-${index}`} className="flex justify-center w-full sm:w-1/3 md:w-1/5 lg:w-1/5 px-2">
              <SkillCards {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}