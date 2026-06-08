import Cards from "./Cards"

const DraggableCard = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center text-offwhite flex-col gap-10">
      <h2 className="font-extrabold text-xl text-center selection:text-[#0099ff] w-50">If its your first day at Fight Club, you have to fight.</h2>
      <Cards />
    </div>
  )
}

export default DraggableCard