"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Our web development services provide cutting-edge solutions tailored to your business needs. We specialize in creating responsive, user-friendly websites that are optimized for performance and scalability. From front-end design to back-end development, our team of experts ensures that your website is built with the latest technologies and best practices. Whether you need a simple landing page or a complex web application, we deliver high-quality results that drive engagement and growth.",
    href: ""
  },
  {
    num: "02",
    title: "Data Analytics",
    description: "Unlock the power of your data with our comprehensive data analytics services. We help you gather, process, and analyze data to uncover valuable insights that drive informed decision-making. Our team uses advanced analytical tools and techniques to transform raw data into actionable intelligence, enabling you to optimize operations, improve customer experiences, and achieve your business goals.",
    href: ""
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "Our UI/UX design services focus on creating intuitive and engaging user experiences. We combine creativity with usability to design interfaces that are not only visually appealing but also easy to navigate. Our user-centered approach ensures that your digital products meet the needs and expectations of your target audience, resulting in higher user satisfaction and increased conversions.",
    href: ""
  },
  {
    num: "04",
    title: "Event Planning",
    description: "Make your events unforgettable with our professional event planning services. From corporate conferences to private celebrations, we handle every detail to ensure a seamless and memorable experience. Our team works closely with you to understand your vision and execute it flawlessly, managing everything from venue selection and logistics to entertainment and catering.",
    href: ""
  },
  {
    num: "05",
    title: "Database Management",
    description: "Ensure the integrity and efficiency of your data with our database management services. We provide comprehensive solutions for database design, implementation, and maintenance, ensuring that your data is secure, accessible, and well-organized. Our experts use industry-leading tools and best practices to optimize database performance, support data-driven applications, and safeguard your valuable information.",
    href: ""
  },
  {
    num: "06",
    title: "Project Management",
    description: "Achieve your project goals with our expert project management services. We provide end-to-end project management solutions, from planning and execution to monitoring and closure. Our certified project managers use proven methodologies to ensure that your projects are delivered on time, within scope, and on budget. We focus on clear communication, risk management, and stakeholder satisfaction to drive successful project outcomes.",
    href: ""
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }, 
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          style={{ marginLeft: '-70px', marginRight: '-100px' }}
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link 
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

