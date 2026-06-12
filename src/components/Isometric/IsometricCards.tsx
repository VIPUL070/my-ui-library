import IsometricBox from "./IsometricBox";
import { motion } from "motion/react";

const items = [
  {
    id: 1,
    title: "Comet Invitation",
    description: "#F7RA",
    variant: "left" as const,
  },
  {
    id: 2,
    title: "Nebula Protocol",
    description: "#B9XY",
    variant: "right" as const,
  },
  {
    id: 3,
    title: "Lunar Module",
    description: "#C2QP",
    variant: "top" as const,
  },
];

const IsometricCards = () => {
  return (
    <div className="min-w-5xl min-h-[70dvh] flex justify-between items-center p-5">
      {items.map((item) => {
        return (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            whileHover={{
              scale: 0.95,
            }}
            transition={{
              type: "spring" as const,
              stiffness: 500,
              damping: 50,
              duration: 0.4,
            }}
            drag
            whileDrag={{
              scale: 0.9,
            }}
            dragConstraints={{
              left: -200,
              right: 200,
              top: -200,
              bottom: 200,
            }}
            key={item.id}
            className="h-110 w-76 bg-cometCard rounded-2xl flex flex-col p-5 gap-4 cursor-pointer"
          >
            <div className="rounded-2xl h-90 w-66 bg-black flex justify-center items-center">
              <IsometricBox
                className="z-20"
                variant={item.variant}
                size="150"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[12px] tracking-wider">{item.title}</span>
              <span className="text-[11px] tracking-tighter font-semibold text-gray-400">
                {item.description}
              </span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default IsometricCards;