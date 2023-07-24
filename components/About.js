import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "./styles";
import { services } from "../constants";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const introText = `
🚀 Tech Enthusiast:

I love exploring the possibilities that modern web development offers. React.js, Node.js, and Tailwind CSS are my go-to tools for building engaging and responsive web applications. From crafting intuitive user interfaces to diving into backend development, I'm always eager to take on new challenges.

🎯 Programming Languages:

I'm well-versed in a wide range of programming languages including C++, Java, C, JavaScript, and Python. These languages have enabled me to tackle diverse problem-solving scenarios and create efficient and robust solutions.


`;
  const intro2 = `💡 Always Learning:

Continuous learning is the heartbeat of my journey. Whether it's staying up-to-date with the latest advancements in technology or delving into new frameworks and libraries, I strive to stay at the cutting edge of software development.

📚 Exploring Diverse Projects:

Throughout my academic journey and personal projects, I've had the opportunity to work on various exciting projects, each contributing to my growth as a developer. From building full-stack web applications to crafting algorithms, I find joy in every line of code.

🎓 Future Goals:

As I progress in my career, my aim is to contribute to the tech industry by creating impactful solutions and making a positive difference in people's lives. The journey of innovation and collaboration excites me, and I'm open to exploring new possibilities.

🌟 Let's Connect:

I'm thrilled to connect with fellow developers, tech enthusiasts, and industry professionals. Let's discuss ideas, collaborate on projects, and embrace the beauty of coding together.

📩 Reach Out:

Feel free to reach out to me via email at abhishek.r@example.com or through my social media profiles linked below. I'm excited to be part of the ever-evolving world of technology, and I can't wait to embark on new adventures with you!`;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px] md:whitespace-pre-line whitespace-normal"
      >
        {introText}
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px] whitespace-pre-line"
      >
        {intro2}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
