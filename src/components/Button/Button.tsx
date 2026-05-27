import { cn } from "../../lib/utils";

const Button = () => {
  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <button className="bg-stone-900 border-2 rounded-lg border-white/20 pl-9 py-1.5 pr-3 flex items-center gap-4 relative group overflow-hidden cursor-pointer">
        <div className="absolute left-0.5 inset-y-0 my-auto group-hover:left-[calc(100%-1.6rem)] group-hover:transform group-hover:rotate-180 ease-out transition-all duration-500 bg-yellow-300 rounded-sm size-6 flex flex-col gap-px items-center justify-center">
          <div className="flex gap-px">
            <Bubble />
            <Bubble />
            <Bubble highlight={true} />
            <Bubble />
            <Bubble />
          </div>
          <div className="flex gap-px">
            <Bubble />
            <Bubble />
            <Bubble />
            <Bubble highlight={true} />
            <Bubble />
          </div>
          <div className="flex gap-px">
            <Bubble highlight={true} />
            <Bubble highlight={true} />
            <Bubble highlight={true} />
            <Bubble highlight={true} />
            <Bubble highlight={true} />
          </div>
          <div className="flex gap-px">
            <Bubble />
            <Bubble />
            <Bubble />
            <Bubble highlight={true} />
            <Bubble />
          </div>
          <div className="flex gap-px">
            <Bubble />
            <Bubble />
            <Bubble highlight={true} />
            <Bubble />
            <Bubble />
          </div>
        </div>
        <div className="absolute inset-0 bg-white/5 [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)] transition-[clip-path] duration-500 ease-out"></div>
        <p className="text-offwhite tracking-tight text-xs inline-block group-hover:-translate-x-6.5 ease-out transition-transform duration-500">
          Chat with Vipul
        </p>
      </button>
    </div>
  );
};

const Bubble = ({ highlight }: { highlight?: boolean }) => {
  return (
    <span
      className={cn(
        "inline-block bg-offwhite/30 size-0.75 rounded-full shrink-0",
        highlight && "bg-offwhite animate-pulse ease-linear"
      )}
    />
  );
};

export default Button;