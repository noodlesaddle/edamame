"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const linesArray = words.split("\n");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, []);

  const renderWords = () => (
    <motion.div ref={scope}>
      {linesArray.map((line, idx) => (
        <div key={idx} className="mb-2">
          {line.split(" ").map((word, wordIdx) => (
            <motion.span
              key={wordIdx}
              className="dark:text-white text-sky-950 opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="dark:text-white  w-full mx-auto leading-snug tracking-wide pr-6 md:px-6 absolute z-10 text-3xl md:text-5xl text-center mb-4 md:top-32 top-36">
        {renderWords()}
        <div className=" hidden w-2/3 lg:flex justify-center mx-auto ">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-thin text-base mt-6 text-yellow-600"
          >
            Sourced from the pristine grasslands of Mongolia, our horse meat
            meets the highest international standards, offering unmatched
            quality, flavor, and sustainability.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
