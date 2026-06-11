import { motion } from "motion/react";

const STROKE = "#b1b4b5";
const DASH = "#9a9d9e";

interface IsometricBoxProps {
  className?: string;
  variant?: "top" | "left" | "right" | "all";
  isActive?: boolean;
}

const IsometricBox = ({
  className = "",
  variant = "all",
  isActive = true,
}: IsometricBoxProps) => {
  const facePath = {
    stroke: STROKE,
    strokeWidth: 1.5,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };

  const dashLine = {
    fill: "none",
    stroke: DASH,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeDasharray: "4 4",
  };

  const TRANSITION = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  };

  const NegativeYAnimate = {
    animate: {
      y: -25,
    },
    initial: {
      y: 0,
    },
  };

  const NegativeXAnimate = {
    animate: {
      x: -25,
    },
    initial: {
      x: 0,
    },
  };

  const XAnimate = {
    animate: {
      x: 25,
    },
    initial: {
      x: 0,
    },
  };

  const NoAnimate = {
    animate: {
      x: 0,
      y: 0,
    },
    initial: {
      x: 0,
      y: 0,
    },
  };

  const getVariants = (face: string) => {
    if (variant !== "all" && face !== variant) return NoAnimate;

    switch (face) {
      case "top":
        return NegativeYAnimate;
      case "left":
        return NegativeXAnimate;
      case "right":
        return XAnimate;
      default:
        return NoAnimate;
    }
  };

  return (
    <motion.div whileHover="animate" initial="initial" className={className}>
      {isActive && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          width={200}
          height={200}
          className="cursor-pointer"
          fill="transparent"
        >
          <motion.path
            variants={getVariants("left")}
            transition={TRANSITION}
            {...facePath}
            fill="#f2f7f7"
            d="M 78 132 C 78 128, 82 124, 86 126 L 196 178 C 200 180, 200 184, 200 188 L 200 308 C 200 313, 196 316, 191 314 L 84 270 C 80 268, 78 264, 78 260 Z"
          />
          <motion.path
            variants={getVariants("right")}
            transition={TRANSITION}
            {...facePath}
            d="M 322 132 C 322 128, 318 124, 314 126 L 204 178 C 200 180, 200 184, 200 188 L 200 308 C 200 313, 204 316, 209 314 L 316 270 C 320 268, 322 264, 322 260 Z"
          />
          <motion.path
            variants={getVariants("top")}
            transition={TRANSITION}
            {...facePath}
            d="M 316 110 C 322 113, 322 119, 316 122 L 208 174 C 204 176, 196 176, 192 174 L 84 122 C 78 119, 78 113, 84 110 L 192 60 C 196 58, 204 58, 208 60 Z"
          />
          <motion.path
            variants={getVariants("top")}
            transition={TRANSITION}
            {...facePath}
            d="M 200 86 C 203 85, 206 85, 209 86 L 270 116 C 273 117, 273 121, 270 122 L 209 152 C 206 153, 203 153, 200 152 L 130 122 C 127 121, 127 117, 130 116 L 191 86 C 194 85, 197 85, 200 86 Z"
          />

          <motion.path
            variants={getVariants("left")}
            transition={TRANSITION}
            {...dashLine}
            d="M 105 152 L 105 263"
          />
          <motion.path
            variants={getVariants("left")}
            transition={TRANSITION}
            {...dashLine}
            d="M 130 164 L 130 275"
          />
          <motion.path
            variants={getVariants("left")}
            transition={TRANSITION}
            {...dashLine}
            d="M 155 176 L 155 287"
          />
          <motion.path
            variants={getVariants("left")}
            transition={TRANSITION}
            {...dashLine}
            d="M 178 187 L 178 299"
          />

          <motion.path
            variants={getVariants("right")}
            transition={TRANSITION}
            {...dashLine}
            d="M 222 187 L 222 299"
          />
          <motion.path
            variants={getVariants("right")}
            transition={TRANSITION}
            {...dashLine}
            d="M 245 176 L 245 287"
          />
          <motion.path
            variants={getVariants("right")}
            transition={TRANSITION}
            {...dashLine}
            d="M 270 164 L 270 275"
          />
          <motion.path
            variants={getVariants("right")}
            transition={TRANSITION}
            {...dashLine}
            d="M 295 152 L 295 263"
          />
        </motion.svg>
      )}
    </motion.div>
  );
};

export default IsometricBox;
