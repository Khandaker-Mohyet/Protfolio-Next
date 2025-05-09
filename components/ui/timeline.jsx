"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id="work"
      className="w-full bg-white dark:bg-neutral-950 font-sans px-5 lg:px-8 xl:px-[8%]"
      ref={containerRef}
    >
      <div className="pt-16 lg:pt-28">
        <h2 className="text-3xl md:text-5xl mb-4 text-black font-bold dark:text-white max-w-4xl">
          Showcase of My Work
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Explore the projects I've crafted over the years, each reflecting my
          growth and dedication to creating meaningful web solutions.
        </p>
      </div>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={item.id || index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="hidden md:block text-xl md:pl-20">
                <h3 className="md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                  {item.title}
                </h3>
                <div className="my-4 flex gap-2 items-center">
                  <h3 className="text-base">{item.tech}</h3>
                  <div className="flex gap-2">{item.techIcons}</div>
                </div>
                <p className="text-base text-neutral-600 dark:text-neutral-400">
                  {item.desc}
                </p>
                {item.projectDetailsButton}
              </div>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden block">
                <h3 className="text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                <div className="my-4 flex gap-2 items-center">
                  <h3 className="text-base">{item.tech}</h3>
                  <div className="flex gap-2">{item.techIcons}</div>
                </div>
                <p className="text-base text-neutral-600 dark:text-neutral-400 mb-4">
                  {item.desc}
                </p>
              </div>
              {item.content}
              <div className="md:hidden">
              {item.projectDetailsButton}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
