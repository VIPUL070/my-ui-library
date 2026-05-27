import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import PlusIconSvg from "../../utils/PlusIconSvg";
import CloseButton from "../../utils/CloseButton";

type Card = {
  title: string;
  description: string;
  modalText?: string;
  modalImg?: string;
};

const CardCarousel = () => {
  const items = [
    {
      title: "Innovation",
      description: "Beautiful and durable, by design.",
      image: "/iphone-1.jpg",
      modalText:
        "Second to none. iPhone is known for its iconic design and advanced materials — like iPhone 17 Pro, which has a heat-forged aluminium unibody and is built to deliver exceptional performance. And our thinnest iPhone ever, iPhone Air. Hardware and software are designed in tandem — like Dynamic Island, Camera Control and the Action button.",
      modalImg: "/modal1.jpg",
    },
    {
      title: "Cutting-Edge Cameras",
      description: "Picture your best photos and videos.",
      image: "/iphone-2.jpg",
      modalText:
        "Keep on zoomin’. The power of the iPhone camera system gives you a wide range of focal lengths with exceptional framing flexibility — from sharp close‑ups to sweeping wide shots that let you capture more of a scene without stepping back. And get up close like never before with 8x optical-quality zoom on iPhone 17 Pro — the longest zoom ever on an iPhone.",
      modalImg: "/modal2.jpg",
    },
    {
      title: "Chip and Battery Life",
      description: "Fast that lasts.",
      image: "/iphone-3.jpg",
      modalText:
        "Long-lasting battery life? 100%. Our hardware and software are designed to work together efficiently, so you can do more on a single charge — like getting up to 31 hours of video playback on iPhone 17 Pro and 37 hours on iPhone 17 Pro Max.",
      modalImg: "/modal3.jpg",
    },
    {
      title: "iOS and Apple Intelligence",
      description: "New look. Even more magic.",
      image: "/iphone-4.jpg",
      modalText:
        "A whole new element of delight. The new Liquid Glass design gives you a delightful, consistent experience across your apps and devices, so everything you do feels fluid. Eliminate distractions with screening tools in Phone, FaceTime and Messages. And personalise chats with new backgrounds.",
      modalImg: "/modal4.jpg",
    },
    {
      title: "Enviorment",
      description: "Designed with the earth in mind.",
      image: "/iphone-5.jpg",
      modalText:
        "More recycled content? Naturally. We’re significantly expanding the use of key recycled metals in iPhone batteries, magnets and circuit boards. Case in point: Our latest models contain 95% recycled lithium in the battery.",
      modalImg: "/modal5.jpg",
    },
    {
      title: "Privacy",
      description: "Your data. Just where you want it.",
      image: "/iphone-6.jpg",
      modalText:
        "Browse securely. Private Browsing in Safari locks browsing windows when they’re not being used, blocks known trackers from loading on pages and removes tracking added to URLs as you browse.",
      modalImg: "/modal6.jpg",
    },
    {
      title: "Peace of Mind",
      description: "Helpful features. Just in case",
      image: "/iphone-7.jpg",
      modalText:
        "For urgent help. Crash Detection can detect a severe car crash and call emergency services when you can’t. And with Emergency SOS, iPhone can automatically call for help and share your location with emergency services.",
      modalImg: "/modal7.jpg",
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

  const [isActive, setIsActive] = useState<Card>({
    title: "",
    description: "",
  });

  const [open, setOpen] = useState(false);

  return (
    <section className="w-full overflow-hidden py-32 relative">
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 h-screen w-screen bg-black/20 backdrop-blur-lg flex items-center justify-center pt-10 px-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            exit={{ opacity: 0 }}
          >
            {isActive && (
              <motion.div
                className="relative w-full h-full bg-offwhite rounded-3xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  mass: 1,
                  damping: 80,
                  stiffness: 200,
                  delay: 0.5,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                  transition: { delay: 0.5, duration: 0.5 },
                }}
              >
                <div
                  className="absolute top-8 right-8 z-50"
                  onClick={() => setOpen(false)}
                >
                  <CloseButton />
                </div>

                <div className="w-full h-full overflow-y-scroll scrollbar-none p-20">
                  <p className="text-black font-bold tracking-tighter pb-4 text-2xl pr-16">
                    {isActive.title}
                  </p>
                  <p className="text-5xl font-semibold tracking-tight pb-20 pr-16">
                    {isActive.description}
                  </p>

                  <div className="w-full flex flex-col gap-8 rounded-3xl pt-15 px-30 bg-neutral-100">
                    <p className="text-neutral-500 text-2xl font-bold tracking-tight">
                      {isActive?.modalText}
                    </p>
                    <img
                      src={isActive.modalImg}
                      alt=""
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

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
              onClick={() => {
                setOpen(true);
                setIsActive(item);
              }}
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
