"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs, 
  FaRobot, 
  FaObjectGroup, 
  FaPaintBrush, 
  FaUserAlt, 
  FaChartBar, 
  FaMicrosoft,
  FaAtom,
  FaDatabase, 
  FaTasks, 
  FaShieldAlt, 
  FaMicrochip, 
  FaCode, 
  FaNetworkWired, 
  FaServer, 
  FaWindows, 
  FaSignal
} from "react-icons/fa";

import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiAdobephotoshop,
  SiTensorflow, 
  SiScikitlearn 
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description: "Hey there! I'm someone who thrives in leadership roles, always striving to stand out and be unique. Following the herd isn't my style; I prefer blazing my own trail. I'm all about thinking outside the box, but if everyone starts doing that, I'll switch it up and think inside the box. My passion for technology and gadgets is boundless. I'm fascinated by Greek myths, fantasies, and love diving into those epic tales. I'm also a huge movie buff, capable of binge-watching two seasons in a single day without breaking a sweat. My journey is fueled by curiosity, creativity, and a relentless pursuit of innovation, making every day an exciting adventure. Join me on this unique ride!.",
  info: [
    {
        fieldName: "Name",
        fieldValue: "Ramprakash R"
    },
    {
        fieldName: "Experience",
        fieldValue: "Medium"
    },
    {
        fieldName: "Nationality",
        fieldValue: "Indian "
    },
    {
        fieldName: "Language",
        fieldValue: "English, Tamil"
    },
    {
        fieldName: "Freelance",
        fieldValue: "Available"
    },
    {
        fieldName: "Age",
        fieldValue: "20"
    },
    {
        fieldName: "Phone",
        fieldValue: "(+91) 86670 29091"
    },
    {
        fieldName: "MailID",
        fieldValue: "ramprakashraja1@gmail.com"
    },
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Welcome to my professional journey! This page showcases the comprehensive details of my internships, leadership roles in college clubs, and various volunteering experiences. Dive in to discover the practical skills, dedication, and diverse experiences that have shaped my career path.",
  items: [
    {
      company: "NextGen Intelligence Club",
      position: "Joint Secretary",
      duration: "Jun 2024 - Present",
      workType: "Full Time",
    },
    {
      company: "SRMVMUN",
      position: "USG of Logistics",
      duration: "Jul 2024 - Present",
      workType: "Full Time",
    },
    {
      company: "APT SKILLS",
      position: "Information Technology Intern",
      duration: "Jul - Sep 2024",
      workType: "Full-time",
    },
    {
      company: "SIMS Hospital",
      position: "Software Engineer Intern",
      duration: "Jun - Jul 2023",
      workType: "Full-time",
    },
    {
      company: "Ayaan Foundation",
      position: "Member",
      duration: "May 2024 - Present",
      workType: "Part Time",
    },
    {
      company: "Association of Computer Science Engineers",
      position: "Committee Member",
      duration: "Jun 2023 - Present",
      workType: "Full Time",
    },
    {
      company: "SRM IST Vadapalani Campus",
      position: "Student Coordinator",
      duration: "Sep 2022 - Present",
      workType: "Full-time",
    },
    {
      company: "Design and Innovation Club",
      position: "Core Member",
      duration: "Sep 2022 - Present",
      workType: "Full-time",
    },
    {
      company: "White Hat Hackers Club",
      position: "Committee Member",
      duration: "Jul 2023 - Present",
      workType: "Full-time",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Welcome to my educational portfolio! Here, you'll find comprehensive details about all the courses I've completed, along with my formal institutional education. Explore the diverse areas of knowledge and skills I've acquired over the years.",
  items: [
    {
      institution: "SRM Institute Of Science and Technology",
      degree: "BTech CSE AIML",
      year: "2022--Present",
    },
    {
      institution: "Ravindra Bharathi Global School",
      degree: "Secondary Education",
      year: "2015--2022",
    },
    {
      institution: "Velammal Matriculation Higher Secondary School",
      degree: "Primary Education",
      year: "2008--2015",
    },
    {
      degree: "Azure AI Fundamentals",
      institution: "Microsoft",
      year: "Dec 2024",
    },
    {
      degree: "Power BI - Data Visualization",
      institution: "Great Learning",
      year: "Nov 2024",
    },
    {
      degree: "Introduction to Data Science",
      institution: "Great Learning",
      year: "Nov 2024",
    },
    {
      degree: "Demystifying Networking",
      institution: "NPTEL",
      year: "Nov 2024",
    },
    {
      degree: "Intro to Machine Learning",
      institution: "NPTEL",
      year: "Nov 2024",
    },
    {
      degree: "Introduction to Machine Learning",
      institution: "Great Learning",
      year: "Nov 2024",
    },
    {
      degree: "Graphical Design with Photoshop",
      institution: "Great Learning",
      year: "Nov 2024",
    },
    {
      degree: "Microsoft 365",
      institution: "Microsoft",
      year: "Nov 2024",
    },
    {
      degree: "Classification with AI",
      institution: "Microsoft",
      year: "Apr 2024",
    },
    {
      degree: "Fundamentals of Generative AI",
      institution: "Microsoft",
      year: "Jan 2024",
    },
    {
      degree: "Object Oriented Design And Analysis",
      institution: "upGrad",
      year: "Jan 2023",
    },
    {
      degree: "Introduction to Operating Systems",
      institution: "NPTEL",
      year: "Nov 2023",
    },
    {
      degree: "Object-Oriented Design",
      institution: "Coursera",
      year: "Sep 2023",
    },
    {
      degree: "Foundations of Cybersecurity",
      institution: "Google",
      year: "Sep 2023",
    },
    {
      degree: "Foundations of Project Management",
      institution: "Google",
      year: "Oct 2023",
    },
    {
      degree: "Foundations of UI/UX Design",
      institution: "Google",
      year: "Oct 2023",
    },
    {
      degree: "Computer Organization and Architecture",
      institution: "Coursera",
      year: "Oct 2023",
    },    
  ],
};

const skills = {
  title: "My skills",
  description:
    "Welcome to my Skills portfolio! This section highlights the diverse range of technical and creative skills I have acquired over the years. From front-end development to data visualization, and from artificial intelligence to user experience design, explore the tools and technologies that empower me to deliver innovative and effective solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html-5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaMicrosoft />,
      name: "Microsoft Azure",
    },
    {
      icon: <FaAtom />,
      name: "Azure AI",
    },
    {
      icon: <SiTensorflow />,
      name: "Generative AI",
    },
    {
      icon: <FaRobot />,
      name: "Artificial Intelligence (AI)",
    },
    {
      icon: <FaMicrosoft />,
      name: "Microsoft 365",
    },
    {
      icon: <FaObjectGroup />,
      name: "Object Oriented Design",
    },
    {
      icon: <FaPaintBrush />,
      name: "User Interface Design",
    },
    {
      icon: <FaUserAlt />,
      name: "User Experience (UX)",
    },
    {
      icon: <FaChartBar />,
      name: "Data Visualization",
    },
    {
      icon: <FaSignal />,
      name: "Microsoft Power BI",
    },
    {
      icon: <SiScikitlearn />,
      name: "Machine Learning Algorithms",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
    {
      icon: <FaDatabase />,
      name: "Data Science",
    },
    {
      icon: <FaTasks />,
      name: "Product Management",
    },
    {
      icon: <FaShieldAlt />,
      name: "Cybersecurity",
    },
    {
      icon: <FaMicrochip />,
      name: "Computer Organization",
    },
    {
      icon: <FaCode />,
      name: "Object-Oriented Programming (OOP)",
    },
    {
      icon: <FaNetworkWired />,
      name: "Computer Networking",
    },
    {
      icon: <FaServer />,
      name: "Computer Network Operations",
    },
    {
      icon: <FaWindows />,
      name: "Operating Systems",
    },
  ],
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience" 
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex justify-between w-full">
                            <span className="text-accent">{item.duration}</span>
                            <span className="text-white/40">{item.workType}</span>
                          </div>
                          <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */} 
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> 
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })};
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */} 
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> 
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
        
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[1020px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
