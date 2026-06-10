import { motion } from "framer-motion";

interface AudioWaveformProps {
  isPlaying?: boolean;
}

export const Waveform = ({ isPlaying = true }: AudioWaveformProps) => {
  const barHeights = [
    24, 24, 24, 14, 24, 20, 24, 16, 24, 26, 24, 14, 24, 20, 24, 14, 18, 14, 24, 14,20 ,18 ,24, 14 ,18 ,20
  ];

  return (
    <div className="inline-flex items-center justify-center">
      <div className="flex h-10 w-25 items-center justify-center rounded-3xl border-2 border-[#1A1A1A] bg-[#FCFBEA] overflow-hidden">
        <svg
          width="100%"
          height="32"
          viewBox="0 0 112 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {barHeights.map((height, index) => {
            const xPosition = index * 6; 
            const yPosition = (32 - height) / 2;
            const duration = 0.45 + (index % 4) * 0.12;
            const delay = (index % 3) * 0.08;

            return (
              <motion.rect
                key={index}
                x={xPosition}
                y={yPosition}
                width="2"
                height={height}
                rx="1"
                className="fill-[#1A1A1A]"
                style={{
                  transformOrigin: `${xPosition + 1}px 16px`,
                }}
                animate={
                  isPlaying
                    ? { scaleY: [1, 0.35, 1] }
                    : { scaleY: 1 }
                }
                transition={
                  isPlaying
                    ? {
                        duration: duration * 1.5,
                        delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0.3, ease: "easeOut" }
                }
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Waveform;