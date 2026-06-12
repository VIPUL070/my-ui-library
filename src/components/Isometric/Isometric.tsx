import IsometricBox from "./IsometricBox"
import IsometricCards from "./IsometricCards"

const Isometric = () => {
  return (
    <div className="bg-black h-[200dvh] w-screen flex justify-around items-center text-offwhite flex-col">
      <IsometricBox />
      <IsometricCards />
    </div>
  )
}

export default Isometric