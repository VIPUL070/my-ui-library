import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Scroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.1], [15, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 400]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1]);
  const textScale = useTransform(scrollYProgress, [0,0.1] , [1,0.9])
  const textOpacity = useTransform(scrollYProgress, [0,0.1], [1, 0.7])
  const blur = useTransform(scrollYProgress, [0,0.1], [0,5])

  const finalBlur = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        filter: "blur(10px)"
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }}
      transition={{
        duration: 0.6,
        ease: "linear",
      }}
      ref={ref}
      className="h-[400vh] relative bg-neutral-100 flex flex-col pt-60 items-center perspective-midrange transform-3d"
    >
      <motion.h1
      style={{
        scale: textScale,
        opacity: textOpacity,
        filter: finalBlur
      }}
       className="text-center">
        <span className="text-[2.5rem] font-semibold ">
          Unleash the power of
        </span>
        <br />
        <span className="text-[6rem] font-bold">Scroll Animation</span>
      </motion.h1>

      <motion.div
        style={{
          rotateX,
          translateZ: "80px",
          y: translateY,
          scale,
        }}
        className="w-1/2 h-150 -mt-25 rounded-3xl bg-white shadow-2xl p-2 border border-neutral-100"
      >
        <div className="bg-black h-full w-full p-2 rounded-2xl">
          <div className="bg-neutral-100 h-full w-full rounded-xl">
            <img
              src="https://assets.aceternity.com/linear-demo.webp"
              alt="Linear Demo"
              className="h-full w-full rounded-xl object-cover"
              height={1024}
              width={1024}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Scroll;
