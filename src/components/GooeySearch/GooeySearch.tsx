import Search from "./Search";

const SVGFILTER = () => {
  return (
    <svg className="absolute hidden h-0 w-0">
      <defs>
        <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const GooeySearch = () => {
  return (
    <div className="relative bg-offwhitte h-dvh w-screen flex justify-center items-center">
      <SVGFILTER />
      <Search />
    </div>
  );
};

export default GooeySearch;
