import selfie from "../img/4096x2304-ghost-white-solid-color-background.jpg"

const AboutMe = () => {
  return (
    <div className="bg-zinc-900">
        <h1 className="text-amber-600 text-4xl flex justify-center font-bold p-10 uppercase">Who am i?</h1>
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div className="p-10">
                <img className="h-13 w-13 animate-pulse" src={selfie} alt="selfie"/>
            </div>
            <div className="p-14">
                <h2 className="text-white text-xl pb-4 font-semibold">Hello, I am Jhonatan Espinosa.</h2>
                <div className="border-b-4 border-amber-600 mb-5 w-24"></div>
                <h3 className="text-white text-3xl font-bold pb-10">I'm JavaScript fullstack web developer.</h3>
                <p className="text-neutral-400 text-sm pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid dolorem saepe, accusamus voluptatem vel eos cumque aut optio corrupti mollitia magni tenetur molestias. Minus atque laborum sunt sed explicabo?</p>
                <p className="text-neutral-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid dolorem saepe, accusamus voluptatem vel eos cumque aut optio corrupti mollitia magni tenetur molestias. Minus atque laborum sunt sed explicabo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloribus natus odio, iusto quis placeat provident esse porro, nostrum veritatis saepe libero nemo amet vero ullam distinctio magnam eaque rerum?</p>
                <div className="flex gap-5 mt-14">
                    <div className="mt-10">
                        <a href="#" className="bg-amber-600 text-white px-7 py-2 text-xl rounded-lg hover:bg-amber-700">Resume</a>
                    </div>
                    <div className="mt-10">
                        <a href="#" className="border border-amber-600 text-amber-600 px-7 py-2 text-xl rounded-lg hover:bg-amber-700 hover:border-amber-700 hover:text-white">My Skills</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe