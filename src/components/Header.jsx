import gitHub from "../img/icons8-github-90.png"
import DarkMode from "../img/icons8-moon-90.png"
import Close from "../img/icons8-close-64.png"
import Menu from "../img/icons8-fries-menu-96.png"
import developer from "../img/WhatsApp_Image_2024-04-08_at_10.24.46_PM-removebg-preview.png"
import { useState } from "react"

//bB

function Header() {

   const [toggle, setToggle] = useState(true)
   const handleClick = () => setToggle(!toggle);

  return (
    <>

    {/* #F59E0B */}

        <nav className="bg-black  flex justify-between items-center p-10">
            
            <div className="flex gap-3">
                <a href="#"><img className="h-[45px] w-[45px]" src={gitHub} alt="gitHub" /></a>
                <a href="#"><img className="h-[45px] w-[45px]" src={DarkMode} alt="" /></a>
            </div>

            <div className="max-lg:hidden">
            <div className="flex gap-10 items-center">

                <a href="#" className="text-white text-2xl border-b-4 border-transparent hover:border-amber-600 duration-300 transition-colors">Home</a>
                <a href="#" className="text-white text-2xl border-b-4 border-transparent hover:border-amber-600 duration-300 transition-colors">Projects</a>
                <a href="#" className="text-white text-2xl border-b-4 border-transparent hover:border-amber-600 duration-300 transition-colors">Resume</a>
                <a href="#" className="bg-amber-600 text-white px-7 py-2 text-xl rounded-lg hover:bg-amber-700">Contact Me</a>
            </div>
            </div>

            <button onClick={handleClick} className="lg:hidden">
                {toggle ? <img className="h-[45px] w-[45px]" src={Menu} alt="Menu" /> : <img className="h-[45px] w-[45px]" src={Close} alt="Close" />}
            </button>
        </nav>

        <div className="bg-black px-3 pb-[113px] grid grid-cols-1 lg:grid-cols-2  items-center justify-items-center">
            <div className="">
                <h1 className="text-white font-bold text-6xl">FullStack & <br /> <span className="text-amber-600"> UX/UI Developer </span></h1>
                <p className="text-neutral-400 font-semibold text-lg pt-8">Hi, my name is Jhonatan Espinosa, based in Mexico City. <br />  Welcome to my Portafolio.</p>
                <div className="mt-10">
                <a href="#" className="bg-amber-600 text-white px-7 py-2 text-xl rounded-lg hover:bg-amber-700">About Me</a>
                </div>
            </div>
            <div className="bg-blob bg-cover">
                <img src={developer} alt="developer" />
            </div>
        </div>

    </>
  )
}

export default Header