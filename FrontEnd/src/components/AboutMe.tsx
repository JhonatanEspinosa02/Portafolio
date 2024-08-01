import selfie from "../components/img/4096x2304-ghost-white-solid-color-background.jpg"

function AboutMe() {
  return (
    <div className="bg-zinc-900 container mx-auto p-10">
        <h1 className="text-blue-800 text-4xl flex justify-center font-bold p-10 uppercase">Who am i?</h1>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 mx-20">
            <div className="px-10">
                <img className="h-13 w-13 animate-pulse" src={selfie} alt="selfie"/>
            </div>
            <div className="p-14">
                <h2 className="text-white text-xl pb-4 font-semibold">Hello, I am Jhonatan Espinosa.</h2>
                <div className="border-b-4 border-blue-800 mb-5 w-24"></div>
                <h3 className="text-white text-3xl font-bold pb-10">I'm a JavaScript FullStack Web Developer.</h3>
                <p className="text-neutral-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid dolorem saepe, accusamus voluptatem vel eos cumque aut optio corrupti mollitia magni tenetur molestias. Minus atque laborum sunt sed explicabo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloribus natus odio, iusto quis placeat provident esse porro, nostrum veritatis saepe libero nemo amet vero ullam distinctio magnam eaque rerum?</p>
                <div className="flex gap-5 mt-14">
                    <div className="mt-10">
                        <a href="#" className="bg-blue-800 text-white px-7 py-2 text-xl rounded-lg hover:bg-blue-900">Resume</a>
                    </div>
                    <div className="mt-10">
                        <a href="#" className="border border-blue-800 text-blue-800 px-7 py-2 text-xl rounded-lg hover:bg-blue-800 hover:border-blue-900 hover:text-white">My Skills</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe