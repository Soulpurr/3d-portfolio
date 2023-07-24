import React from "react";

import { BallCanvas } from "./Canvas";
import { SectionWrapper } from "./hoc";
import { technologies } from "../constants";
import Image from "next/image";

const Tech = () => {
  console.log(technologies);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <div className="hidden lg:block">
            <BallCanvas icon={technology.icon} />
          </div>
          <div className="lg:hidden flex items-center justify-center h-24 w-24 rounded-full bg-gray-300">
            <Image className="hover:animate-bounce" src={technology.icon} alt="Icon" width={40} height={40} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
