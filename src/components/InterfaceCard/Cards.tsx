import { motion } from "motion/react";
import { cn } from "../../lib/utils";

const cards = [
  {
    title: "Working Knowledge",
    description:
      "Frameworks, principles, and models I've learned and developed that you will be able to immediately apply to your practice.",
    skeleton: <div className="h-50 w-full bg-linear-to-r from-orange-700 to-orange/60 rounded-lg"/>,
    className: "bg-cardOrange",
    config: {
      y: -20,
      x: 0,
      zIndex: 2,
      rotate: -8,
    },
  },
  {
    title: "Practical Demonstration",
    description:
      "Detailed walkthroughs of designing interfaces, identifying opportunities, and improving through refinement.",
    skeleton: <div className="h-50 w-full bg-linear-to-r from-stone-200 to-stone/60 rounded-lg"/>,
    className: "bg-cardWhite text-black",
    config: {
      y: 20,
      x: 180,
      zIndex: 3,
      rotate: 5,
    },
  },
  {
    title: "Collaborating with AI",
    description:
      "Video lessons on practical, specific methods of working with AI to get exacting results. Tools covered include Claude Code and v0.",
    skeleton: <div className="h-50 w-full bg-linear-to-r from-blue-300 to-blue/60 rounded-lg"/>,
    className: "bg-cardBlue",
    config: {
      y: -80,
      x: 360,
      zIndex: 4,
      rotate: -2,
    },
  },
  {
    title: "Means & Methods",
    description:
      "General tips and techniques to apply to your daily work to achieve excellence in interface design and assembly.",
    skeleton: <div className="h-50 w-full bg-linear-to-r from-green-300 to-green/60 rounded-lg"/>,
    className: "bg-cardGreen text-black",
    config: {
      y: 20,
      x: 540,
      zIndex: 5,
      rotate: 3,
    },
  },
  {
    title: "Interface Kit",
    description:
      "Screencasts, highlights, and deep dives that showcase the end-to-end journey for designing and building",
    skeleton: <div className="h-50 w-full bg-linear-to-r from-gray-300 to-gray/60 rounded-lg"/>,
    className: "bg-cardBlack",
    config: {
      y: -20,
      x: 720,
      zIndex: 6,
      rotate: 8,
    },
  },
];

const Cards = () => {
  return (
    <div className="w-247.5 h-160 relative mx-auto flex items-center">
      {cards.map((card) => {
        return (
          <motion.div key={card.title}>
            <motion.button
            initial={{
              y:400,
              x:0,
              scale: 0,
              filter:'blur(10px)'
            }}
            animate={{
                y: card.config.y,
                x: card.config.x,
                rotate: card.config.rotate,
                scale: 1,
                width: 250,
                height: 320,
                filter: "blur(0px)"
            }}
            whileHover={{
              scale: 1.05
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 100,
            }}
              className={cn(
                "w-80 p-8 absolute top-1/2 left-0 -translate-y-1/2 flex flex-col justify-between items-start overflow-hidden cursor-pointer rounded-2xl",
                card.className
              )}
            >
              {card.skeleton}
              <div>
                <motion.h2 className="text-2xl font-semibold text-left pt-2">{card.title}</motion.h2>
              </div>
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Cards;
