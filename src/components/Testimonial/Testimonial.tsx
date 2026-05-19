"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LeftArrow from "../../utils/LeftArrow";
import RightArrow from "../../utils/RightArrow";


const testimonials = [
  {
    quote:
      "This platform completely transformed our development workflow. Features that used to take us a week to implement can now be shipped in just a couple of hours.",
    name: "Sarah Jenkins",
    designation: "Senior Frontend Engineer",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The interface is incredibly intuitive, and the documentation made integration seamless. Our user engagement metrics spiked by nearly 40% in the first month alone.",
    name: "David Chen",
    designation: "Product Manager",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "As a designer, I'm incredibly picky about consistency and micro-interactions. This tool scales beautifully and keeps our UI perfectly in sync with development.",
    name: "Elena Rostova",
    designation: "Lead UX/UI Designer",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The reliability is what stands out the most. We haven't experienced a single minute of unexpected downtime since migrating our core services over.",
    name: "Marcus Vance",
    designation: "DevOps & Cloud Architect",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Customer support went above and beyond to help us configure our custom Webhooks. It’s rare to find a team that cares this deeply about developer success.",
    name: "Aisha Rahman",
    designation: "Full Stack Developer",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(testimonials[0]);

  const handlePrev = () => {
    setActive(
      (prev) =>
        testimonials[
          (testimonials.length - 1 + testimonials.indexOf(prev)) %
            testimonials.length
        ]
    );
  };

  const handleNext = () => {
    setActive(
      (next) =>
        testimonials[(testimonials.indexOf(next) + 1) % testimonials.length]
    );
  };

  const [rotations] = useState(() =>
    testimonials.map(() => Math.floor(Math.random() * 20) - 10)
  );

  const isActive = (idx: number) => {
    return idx === testimonials.indexOf(active);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
      <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="relative h-72 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, idx) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    zIndex: -100,
                    rotate: rotations[idx],
                    y: 0
                  }}
                  animate={{
                    opacity: isActive(idx) ? 1 : 0.7,
                    scale: isActive(idx) ? 1 : 0.95,
                    rotate: isActive(idx) ? 0 : rotations[idx],
                    zIndex: isActive(idx) ? 999 : testimonials.length + 2 - idx,
                    y: isActive(idx) ? [0,-80 ,0] : 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: rotations[idx],
                  }}
                  key={testimonial.name}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="rounded-3xl aspect-square object-cover"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div 
        initial={{
          opacity: 0,
          y: -8
        }}

        animate= {{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.1,
          ease: "easeInOut"
        }}
        >
          <h2 className="font-bold text-2xl">{active.name}</h2>
          <p className="text-base text-neutral-500 ">{active.designation}</p>
          <p className="pt-10 text-lg text-neutral-600">
            {active.quote.split(" ").map((t,idx) => {
              return(
                <motion.span key={t+idx}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)" 
                }}
                animate= {{
                   opacity: 1,
                   filter: "blur(0px)"
                }}
                transition={{
                  delay: 0.05 * idx
                }}
                >
                  {t}{" "}
                </motion.span>
              )
            })}

          </p>
          <div className="flex gap-10 pt-10 mt-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full flex items-center justify-center bg-neutral-200 cursor-pointer"
            >
              <LeftArrow />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full flex items-center justify-center bg-neutral-200 cursor-pointer"
            >
              <RightArrow />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
