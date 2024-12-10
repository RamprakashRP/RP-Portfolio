"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Calorie Burn Prediction",
    title: "Calorie Burn Prediction",
    description: " Developed a model in python by training the algorithm with predefined dataset of real world Human Data where the algorithm predicts the calories burnt according to the informations like Age, Gender, Exercise, Duration, Height, Weight, etc..",
    stack: [{ name: "Python" }],
    image: "/assets/work/calburn.png",
    live: "",
    github: "https://github.com/RamprakashRP/Calorie-Burn-Prediction",
  },
  {
    num: "02",
    category: "RTF to JSON Converter",
    title: "RTF to JSON Converter",
    description: "Developed a full-stack app to convert RTF files which was used as a common format in medical field before the Microsoft apps came in place into JSON format so that then the company can further proceed to save it into a JSON database to have it in Easy Access.",
    stack: [{ name: "Python" }, { name: "Pylint" }, { name: "Sphinx" }],
    image: "/assets/work/confidential.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "SIMS Hospital Managemnt System Internship",
    title: "SIMS Hospital Managemnt System Internship",
    description: " Developed the official website for SIMS Hospital using HTML, CSS, and Javascript, creating a user friendly platform. This project seamlessly integrates informative content, responsive design, and interactive elements to enhance the online experience for visitors.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/SIH.png",
    live: "",
    github: "https://github.com/RamprakashRP/SIMS-Internship-UI",
  },
  {
    num: "04",
    category: "Hotel Management System",
    title: "Hotel Management System",
    description: "Crafted a dynamic Hotel Management System using Java, delivering a comprehensive solution for efficient hotel operations. This system excels in managing reservations, guest information, and streamlining the overall hospitality experience..",
    stack: [{ name: "Java" }, { name: "SQLite" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/RamprakashRP/Hotel-Management-System",
  },
  {
    num: "05",
    category: "Employee Management System",
    title: "project 1",
    description: " Engineered a Dynamic Employee Management System using Python, ensuring efficient organization and access to resources. This system simplifies tasks like Employee tracking, Access management, and enhances overall Management operations seamlessly.",
    stack: [{ name: "Java" }, { name: "SQLite" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/RamprakashRP/Employee-Management-System",
  },
  {
    num: "06",
    category: " Parking Management System",
    title: " Parking Management System",
    description: "Designed a Parking Management System in C, offering an efficient solution for space allocation and streamlined operations. This system optimizes parking space usage and facilitates effective tracking and management",
    stack: [{ name: "C" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "Library Management System",
    title: "Library Management System",
    description: "Engineered a robust Library Management System using Python, ensuring efficient organization and access to resources. This system simplifies tasks like book tracking, member management, and enhances overall library operations seamlessly",
    stack: [{ name: "Python" }, { name: "MySQL" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "Voice Assistant AI",
    title: "Voice Assistant AI",
    description: " Developed an innovative Voice Assistant AI using Python, seamlessly integrating natural language processing and machine learning. This project enhances user interaction, performing tasks and providing information through intuitive voice commands",
    stack: [{ name: "Python" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/RamprakashRP/Voice-Assistant",
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-primary z-100"></div>
                      {/* image */}
                      <div className="relative">
                        <Image
                          src={project.image}
                          layout="responsive" // Use responsive layout
                          width={700} // Set the width of the image
                          height={175} // Set the height of the image
                          className="object-cover" // Adjust object-fit property
                          alt="Project Image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>

        </div>
      </div>

    </motion.section>
  );
};


export default Work;
