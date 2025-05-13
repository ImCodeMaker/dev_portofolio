import SkillCardProps from "@/interfaces/SkillCardProps";
import Image from "next/image";
import React from "react";

export const SkillCards: React.FC<SkillCardProps> = ({ text, image }) => {
  return (
    <>
      <div className="flex items-center justify-center bg-white drop-shadow-2xl flex-col w-36 h-42 rounded-md">
        <Image
          src={image}
          alt={text}
          width={100}
          height={100}
          className="flex justify-center items-center"
        />
        <span className="font-bold text-lg ">{text}</span>
      </div>
    </>
  );
};
