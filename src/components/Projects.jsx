import white from "../img/4096x2304-ghost-white-solid-color-background.jpg"

const Projects = () => {
  return (
    <>
    <main className="bg-black">

        <h1 className="text-amber-600 text-4xl flex justify-start font-bold uppercase ml-10 pt-16"> <span className="text-white mr-2">my  </span>projects</h1>

        <div className="h-screen w-full grid grid-cols-2 grid-rows-4 gap-4 p-20">
            <div className="col-span-1 row-span-2">
                <a href=""><img className="w-full h-full object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={white} alt="white" /></a>
            </div>

            <div className="col-span-1 row-span-1">
                <a href=""><img className="w-full h-full object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={white} alt="white" /></a>
            </div>
            <div className="col-span-1 row-span-2">
                <a href=""><img className="w-full h-full object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={white} alt="white" /></a>
            </div>
            <div className="col-span-1 row-span-1">
                <a href=""><img className="w-full h-full object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={white} alt="white" /></a>
            </div>


        </div>
    </main>
    </>
  )
}

export default Projects