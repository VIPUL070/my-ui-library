"use client";
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { animate } from "motion";

interface CardProps {
  index: number;
  item: (typeof items)[number];
  total: number;
  onSendToBack?: () => void;
}

const items = [
  {
    title: "Australia",
    description: "Kangaroos, cricket and beaches.",
    imageUrl:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Japan",
    description: "Cherry blossoms and neon streets.",
    imageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Slovenia",
    description: "Alpine lakes, castles and emerald rivers.",
    imageUrl:
      "https://images.unsplash.com/photo-1483168527879-c66136b56105?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Paris",
    description: "Eiffel Tower, cafes and art.",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "India",
    description: "Taj Mahal, spices and festivals.",
    imageUrl:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Iceland",
    description: "Northern lights and waterfalls.",
    imageUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Cards = () => {
  const [stack, setStack] = useState(items);

  return (
    <div className="w-50 h-62 relative flex items-center justify-center">
      {stack.map((item, index) => {
        return (
          <StackedCards
            key={item.title}
            index={index}
            item={item}
            total={stack.length}
            onSendToBack={
              index === 0
                ? () => setStack((s) => [...s.slice(1), s[0]])
                : undefined
            }
          />
        );
      })}
    </div>
  );
};

const StackedCards = ({ index, item, total, onSendToBack }: CardProps) => {
  const STACK_SPRING = {
    type: "spring" as const,
    stiffness: 380,
    damping: 28,
  };

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-9, 9]);
  const atTop = index === 0;
  return (
    <motion.div
      style={{
        zIndex: total - index,
        x,
        rotate,
      }}
      drag={atTop ? "x" : false}
      dragConstraints={{
        left: -100,
        right: 100,
      }}
      dragElastic={0.08}
      animate={{
        y: `${-index * 4}%`,
        scale: 1 - index * 0.04,
      }}
      onDragEnd={() => {
        if (!atTop || !onSendToBack) return;
        onSendToBack();
        animate(x, 0, STACK_SPRING);
      }}
      transition={STACK_SPRING}
      className="absolute inset-0"
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="pointer-events-none w-full min-h-62 select-none rounded-md object-cover"
      />
      <h2 className="absolute bottom-4 left-2 font-bold text-lg z-20">
        {item.title}
      </h2>
      <p className="absolute bottom-1.5 left-2 text-[9px] text-offwhite/60 z-20">
        {item.description}
      </p>
      <div className="absolute inset-0 w-full h-full bg-black-50 mask-t-from-50%"></div>
    </motion.div>
  );
};

export default Cards;
