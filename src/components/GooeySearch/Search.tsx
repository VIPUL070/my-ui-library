import { motion } from "motion/react";
import SearchIcon from "../../utils/SearchIcon";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");
  const buttonVariants = {
    collapsed: {
      width: 150,
      marginLeft: 0,
    },
    expanded: {
      width: 200,
      marginLeft: 50,
    },
  };
  const iconVariants = {
    collapsed: {
      scale: 0,
      opacity: 0,
    },
    expanded: {
      scale: 1,
      opacity: 1,
    },
  };
  const TRANSITION = {
    duration: 1,
    type: "spring" as const,
    bounce: 0.25,
  };

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    } else {
      setSearchText("");
    }
  }, [isExpanded]);

  return (
    <div 
    style={{
      filter: 'url(#gooey-filter)'
    }}
    className={`relative h-10 flex justify-center items-center`}>
      <motion.div
        variants={buttonVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={TRANSITION}
        className="h-10 flex justify-center items-center"
      >
        <button className="h-10 px-4 w-full flex justify-center items-center rounded-full gap-4 bg-black text-offwhite cursor-pointer font-medium">
          {!isExpanded && <SearchIcon />}
          <motion.input
            layoutId="input"
            ref={inputRef}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onBlur={() => !searchText && setIsExpanded(false)}
            onClick={() => setIsExpanded(true)}
            type="text"
            placeholder="Search..."
            className="h-full w-full bg-transparent text-sm outline-none placeholder-offwhite/50 "
          />
        </button>
      </motion.div>

      <motion.div
        variants={iconVariants}
        transition={TRANSITION}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-offwhite bg-black flex size-10 justify-center items-center rounded-full"
      >
        <SearchIcon />
      </motion.div>
    </div>
  );
};

export default Search;