import { motion } from "motion/react";
import { useState } from "react";
import PlusIconSvg from "../../utils/PlusIconSvg";

// type Card = {
//   title: string;
//   description: string;
// };

const CardCarousel = () => {
  const items = [
    {
      title: "Innovation",
      description: "Beautiful and durable, by design.",
      image: "/iphone-1.jpg",
    },
    {
      title: "Cutting-Edge Cameras",
      description: "Picture your best photos and videos.",
      image: "/iphone-2.jpg",
    },
    {
      title: "Chip and Battery Life",
      description: "Fast that lasts.",
      image: "/iphone-3.jpg",
    },
    {
      title: "iOS and Apple Intelligence",
      description: "New look. Even more magic.",
      image: "/iphone-4.jpg",
    },
    {
      title: "Enviorment",
      description: "Designed with the earth in mind.",
      image: "/iphone-5.jpg",
    },
    {
      title: "Privacy",
      description: "Your data. Just where you want it.",
      image: "/iphone-6.jpg",
    },
    {
      title: "Peace of Mind",
      description: "Helpful features. Just in case",
      image: "/iphone-7.jpg",
    },
  ];

  const startInset =
    "pl-[max(1rem,calc((100vw-75rem)/2+1rem))] " +
    "pr-[max(1rem,calc((100vw-75rem)/2+1rem))] " +
    "scroll-pl-[max(1rem,calc((100vw-75rem)/2+1rem))]";

  const cardTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
  };

//   const [isActive, setIsActive] = useState<Card>({
//     title: "",
//     description: "",
//   });

  const [open, setOpen] = useState(false);

  return (
    <section className="w-full overflow-hidden py-32 relative">
      {open && (
        <div className="fixed inset-0 z-50 h-screen w-screen bg-black/20 backdrop-blur-md flex items-center justify-center pt-15 px-30">
            <div className="bg-offwhite w-full h-full relative rounded-3xl overflow-y-scroll ">
            </div>
        </div>
      )}
      {/* HEADING DIV */}
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-black text-5xl font-semibold tracking-tight">
          Get to know iPhone.
        </h2>
      </div>

      {/* CARD DIV  */}
      <div
        className={`overflow-x-scroll flex gap-4 w-full scrollbar-none py-14 snap-x snap-mandatory ${startInset}`}
      >
        {items.map((item) => {
          return (
            <motion.div
              key={item.title}
              className="w-90 h-160 relative bg-cover bg-center bg-no-repeat rounded-3xl snap-start text-offwhite shrink-0 p-8 cursor-pointer flex flex-col overflow-hidden"
              style={{ backgroundImage: `url(${item.image})` }}
              onClick={() => setOpen(true)}
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.03,
              }}
              transition={cardTransition}
            >
              <p className="text-neutral-300 font-bold tracking-tighter pb-2">
                {item.title}
              </p>
              <p className="text-3xl font-semibold tracking-tight">
                {item.description}{" "}
              </p>
              <button className="mt-auto self-end w-9 h-9 bg-white rounded-full text-black flex items-center justify-center">
                <PlusIconSvg />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CardCarousel;
