import Waveform from "../../utils/Waveform"
import HeroContent from "./HeroContent"
import TextAnimation from "./TextAnimation";

const TextFlowAnimation = () => {
  return (
    <section className="relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden bg-[#FDFCF0] px-6 py-16">
      <TextAnimation />
      <HeroContent />

      <div className="absolute left-1/2 bottom-10 z-30 flex -translate-x-1/2 flex-col items-center gap-3">
          <Waveform />
      </div>
    </section>
  );
};

export default TextFlowAnimation