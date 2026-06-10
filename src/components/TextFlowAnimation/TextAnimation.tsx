const LEFT_TEXT =
  "Umm, hope your week has started well…I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the project, but I’m not totally sure. Also, I told the team the the new timeline should be ready by Friday, although it’s probably going to slip. There’s been a lot of back and forth and honestly the the whole thing’s been kind of chaotic, like nobody really knows what’s going on so can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting. I think Cheyene mentioned it but didn’t confirm, and now I’m a little lost.";

const RIGHT_TEXT =
  "Hope your week is off to a good start. I was talking to Cheyene earlier, but the reception was really bad. I think they’re going to handle the first part of the project, but I’m not totally sure. I also told the team the new timeline should be ready by Friday — although it might slip. There’s been a lot of back and forth, and honestly, the whole thing has been a bit chaotic. It feels like nobody really knows what’s going on. Can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting? I think Cheyene mentioned it, but didn’t confirm — and now I’m a little lost!";

const TextAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute left-1/9 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-147.5 aspect-928/594 ">
        <svg
          id="hero-svg"
          fill="none"
          viewBox="0 0 928 594"
          className="w-full h-full"
        >
          <path
            id="curve1"
            className="fill-transparent stroke-white stroke-[1.5]"
            d="M0.597656 50.924805C17.4612 143.2965 97.8522 293.141 284.508 353.548C440.828 399.056 583.839 294.067 500.618 184.7492C417.397 75.4309 238.217 282.098 499.258 441.668C551.913 477.802 817.468 561.26 1046.43 565.235"
          />
          <text x="0" className="text-base">
            <textPath
              id="marquee-text-first"
              href="#curve1"
              className="fill-[#1A1A1A] font-normal opacity-50 [baseline-shift:20%]"
            >
              {LEFT_TEXT}
            </textPath>
            <animate
              id="marquee-anim-first"
              attributeName="x"
              dur="25s"
              values="-2000;0"
              repeatCount="indefinite"
            ></animate>
          </text>
        </svg>
      </div>
      <div className="absolute -right-1/2 top-1/2 -translate-x-3/7 -translate-y-1/2 w-full max-w-147.5 aspect-1000/620 m-3">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1000 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curve2"
            d="M2.04309 563.872C111.592 558.268 316.491 554.016 517.963 490.064C703.017 431.323 875.319 444.531 1021.88 453.216"
            stroke="#1A1A1A"
            stroke-width="35"
          ></path>

          <text x="-4500">
            <textPath id="marquee-text-hero2" href="#curve2" className="fill-offwhite font-normal [baseline-shift:-35%]" >
              {RIGHT_TEXT}
            </textPath>
            <animate
              id="marquee2-anim"
              attributeName="x"
              dur="25s"
              values=" -4500;0"
              repeatCount="indefinite"
            ></animate>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default TextAnimation;
