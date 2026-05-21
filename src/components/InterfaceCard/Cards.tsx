import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Card = {
  title: string;
  description: string;
  skeleton: ReactNode;
  className: string;
  config: {
    y: number;
    x: number;
    zIndex: number;
    rotate: number;
  };
};
const cards = [
  {
    title: "Working Knowledge",
    description:
      "Frameworks, principles, and models I've learned and developed that you will be able to immediately apply to your practice.",
    skeleton: (
      <div className="h-50 w-full bg-linear-to-r from-orange-700 to-orange/60 rounded-lg" />
    ),
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
    skeleton: (
      <div className="h-50 w-full bg-linear-to-r from-stone-200 to-stone/60 rounded-lg" />
    ),
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
    skeleton: (
      <div className="h-50 w-full bg-linear-to-r from-blue-300 to-blue/60 rounded-lg" />
    ),
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
    skeleton: (
      <div className="h-50 w-full bg-linear-to-r from-green-300 to-green/60 rounded-lg" />
    ),
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
    skeleton: (
      <div className="h-50 w-full bg-linear-to-r from-gray-300 to-gray/60 rounded-lg" />
    ),
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
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const isAnyCardActive = () => {
    return active?.title;
  };

  const isCurrentActive = (card: Card) => {
    return active?.title === card?.title;
  };

  return (
    <div ref={ref} className="w-247.5 h-160 relative mx-auto flex items-center">
      {cards.map((card) => {
        return (
          <motion.div key={card.title}>
            <motion.button
              onClick={() => setActive(card)}
              initial={{
                y: 400,
                x: 0,
                scale: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: isCurrentActive(card)
                  ? 0
                  : isAnyCardActive()
                  ? 280
                  : card.config.y,
                x: isCurrentActive(card)
                  ? 350
                  : isAnyCardActive()
                  ? card.config.x * 0.6 + 244
                  : card.config.x,
                rotate: isCurrentActive(card)
                  ? 0
                  : isAnyCardActive()
                  ? card.config.rotate * 0.2
                  : card.config.rotate,
                scale: isCurrentActive(card) ? 1 : isAnyCardActive() ? 0.7 : 1,
                width: isCurrentActive(card) ? 350 : 240,
                height: isCurrentActive(card) ? 450 : 300,
                filter: "blur(0px)",
              }}
              whileHover={{
                scale: isCurrentActive(card)
                  ? 1.05
                  : isAnyCardActive()
                  ? 0.7
                  : 1.05,
              }}
              style={{
                zIndex: isCurrentActive(card)? 9 : active?.config.zIndex,
              }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              className={cn(
                "w-80 p-4 absolute top-1/2 left-0 -translate-y-3/4 flex flex-col justify-between items-start overflow-hidden cursor-pointer rounded-2xl",
                card.className
              )}
            >
              {card.skeleton}
              <div>
                <motion.h2  layoutId = {card.title + "title"} className="text-xl font-semibold text-left pt-2">
                  {card.title}
                </motion.h2>
              </div>

              <AnimatePresence mode="popLayout">
                {isCurrentActive(card) && (
                  <motion.p
                  layoutId= {card.title + "description"}
                    initial={{
                      opacity: 0,
                      x: 20,
                      y: 20,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                      height: 100,
                    }}
                    exit={{
                      opacity: 0,
                      x: 40,
                      y: 40,
                      height: 0,
                    }}
                    className=" mb-3 text-lg text-left"
                  >
                    {active?.description}
                  </motion.p>
                )}
              </AnimatePresence>

            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Cards;