import React from "react";

import { BallCanvas } from "./Canvas";
import { SectionWrapper } from "./hoc";
import { technologies } from "../constants";

const Tech = () => {
  console.log(technologies)
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");