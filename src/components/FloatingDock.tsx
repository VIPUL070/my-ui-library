"use client";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, type ReactElement } from "react";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "VipulX UI",
    icon: (
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="VipulX Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const FloatingDock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="flex items-center justify-center w-full bg-black h-dvh">
      <motion.div
        className="bg-neutral-900 rounded-3xl p-4"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <ul className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <li key={link.title} className="h-10 flex items-center justify-center">
              <DockIcon href={link.href} mouseX={mouseX} icon={link.icon} title={link.title} />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const DockIcon = ({
  href,
  mouseX,
  icon,
  title
}: {
  href: string;
  mouseX: MotionValue<number>;
  icon: ReactElement;
  title: string
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthIconTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
  const heightIconTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform , {
    mass: 0.1,
    damping: 12,
    stiffness: 150
  })
  const height = useSpring(heightTransform , {
    mass: 0.1,
    damping: 12,
    stiffness: 150
  })
  const widthIcon = useSpring(widthIconTransform , {
    mass: 0.1,
    damping: 12,
    stiffness: 150
  })
  const heightIcon = useSpring(heightIconTransform , {
    mass: 0.1,
    damping: 12,
    stiffness: 150
  })

  const [hover, setHover] = useState(false);

  return (
    <a href={href}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
      <motion.div
        ref={ref}
        style={{
          width,
          height
        }}
        className="flex relative items-center justify-center bg-neutral-800 p-2 rounded-full"
      >
        <AnimatePresence>
        {hover && (
            <motion.div className="whitespace-pre -top-9 absolute text-xs bg-neutral-800 text-white p-1 rounded-lg text-center"
            initial={{
                opacity: 0,
                y: 10,
            }}
            animate={{
                opacity: 1,
                y:0
            }}
            exit={{
                opacity: 0,
                y: 2
            }}
            transition={{
                duration: 0.2,
                ease: "easeInOut"
            }}
            >
             {title}
            </motion.div>
        )}
        </AnimatePresence>

        <motion.div
          className="flex items-center justify-center"
          style={{
            width: widthIcon,
            height: heightIcon,
          }}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
};

export default FloatingDock;