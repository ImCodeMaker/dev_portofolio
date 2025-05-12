
import ProjectsProps from "@/interfaces/ProjectsProps";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProjectsCard: React.FC<ProjectsProps> = ({ name, image, pageLink }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-96 h-72 rounded-lg overflow-hidden hover:cursor-pointer">
        {pageLink ? (
          <Link href={pageLink} target="_blank" rel="noopener">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              width={300}
              height={200}
            />
          </Link>
        ) : (
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            width={300}
            height={200}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center top-50 bg-opacity-50 text-black text-center py-2 px-4">
          <span className="text-xl font-semibold">{name}</span>
        </div>
      </div>
    </div>
  );
};


