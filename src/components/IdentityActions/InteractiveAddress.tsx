import {
  IconBrandInstagram,
  IconMail,
  IconUser,
  IconWorld,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState, type ReactNode } from "react";

type HighlightType = "name" | "email" | "website" | "instagram" | null;

const icons = [
  {
    type: "name" as HighlightType,
    label: "Name",
    icon: (
      <IconUser
        stroke={2}
        strokeWidth={1.5}
        className="transition-colors duration-150 size-8"
      />
    ),
  },
  {
    type: "website" as HighlightType,
    label: "Website",
    icon: (
      <IconWorld
        stroke={2}
        strokeWidth={1.5}
        className="transition-colors duration-150 size-8"
      />
    ),
  },
  {
    type: "email" as HighlightType,
    label: "Email",
    icon: (
      <IconMail
        stroke={2}
        strokeWidth={1.5}
        className="transition-colors duration-150 size-8"
      />
    ),
  },
  {
    type: "instagram" as HighlightType,
    label: "Instagram",
    icon: (
      <IconBrandInstagram
        stroke={2}
        strokeWidth={1.5}
        className="transition-colors duration-150 size-8"
      />
    ),
  },
];

const TextSegment = ({children}: {children: ReactNode}) => {
 return(
    <motion.span className="tracking-tight">
        {children}
    </motion.span>
 );
}

const InteractiveAddress = ({
  email = "name@example.com",
}: {
  email: string;
}) => {
  const [highlight, setHighlght] = useState<HighlightType>(null);
  const [emailName , emailDomain] = email.split('@');  //name ....... example.com
  const domainParts = emailDomain.split('.')           // example ....... com
  const domainName = domainParts[0];                   //example
  const domainExt = domainParts.slice(1).join(".")     // .com

  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const atRef = useRef<HTMLDivElement>(null);
  const domainRef = useRef<HTMLDivElement>(null);
  const extRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 p-8">

      <div className="min-h-30 flex flex-col items-center">
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center text-3xl font-medium tracking-tight md:text-5xl">
            <TextSegment>{emailName}</TextSegment>
            <TextSegment>@</TextSegment>
            <TextSegment>{domainName}</TextSegment>
            <TextSegment>.{domainExt}</TextSegment>
        </div>
      </div>

      <div className="flex items-center mt-4 gap-3">
        {icons.map(({ type,icon }) => {
          return (
            <motion.button
              key={type}
              onMouseEnter={() => {
                setHighlght(type);
              }}
              onMouseLeave={() => {
                setHighlght(null);
              }}
              className="cursor-pointer relative rounded-lg p-2 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}

              <AnimatePresence>
                {highlight === type && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute inset-0 -z-10 rounded-lg bg-neutral-900"
                  >
                    {/* {label} */}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveAddress;
