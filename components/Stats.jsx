"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 96.5,
    text: "Academic Percentage",
  },
  {
    num: 25,
    text: "Projects Completed",
  },
  {
    num: 75,
    text: "Badges/Courses Completed",
  },
  {
    num: 20000,
    text: "Lines of Code Written",
  },
];

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p>{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
