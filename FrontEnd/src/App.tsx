import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ClientDataForm from "./components/ClientDataForm";
import Modal from "./components/Modal";
import {
  FaGithub,
  FaMoon,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { MdEmail, MdShare } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import Skills from "./components/Skills";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <header className="bg-black container mx-auto p-10">
        {/*Check pt-2 if you've got problems */}
        <nav className="flex justify-around items-center">
          <div className="text-neutral-400 text-xl items-center">
            <a href="#">
              <IoLanguageOutline className="w-8 h-8 hover:text-white" />
            </a>
          </div>
          <div className="text-neutral-400 flex gap-5 text-xl">
            <a
              className="hover:text-white border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors"
              href=""
            >
              About
            </a>
            <a
              className="hover:text-white border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors"
              href=""
            >
              Projects
            </a>
            <a
              className="hover:text-white border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors"
              href=""
            >
              Skills
            </a>
            <a
              className="hover:text-white border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors"
              href=""
            >
              Contact
            </a>
          </div>

          <div className="text-neutral-400 text-xl flex items-center gap-3">
            <a href="">
              <FaGithub className="w-7 h-7 hover:text-white" />
            </a>
            <a href="">
              <FaMoon className="w-6 h-6 hover:text-white" />
            </a>
          </div>
        </nav>

        {/*Check pt-10 if you've got problems */}
        <div className="grid grid-cols-1 lg:grid-cols-2  justify-items-center mx-20 pt-10">
          <div className="my-10">
            <h1 className="text-white font-bold text-6xl">
              FullStack & <br />{" "}
              <span className="text-blue-800"> MERN Developer </span>
            </h1>
            <div className="h-1 w-44 bg-blue-800 my-4"></div>
            <p className="text-neutral-400 font-semibold text-lg">
              Hi, my name is Jhonatan Espinosa, based in Mexico City. <br />{" "}
              Welcome to my Portafolio.
            </p>
            <div className="mt-14">
              <a
                href="#"
                className="bg-blue-800 text-white px-7 py-2 text-xl rounded-lg hover:bg-blue-700"
              >
                About Me
              </a>
            </div>

            <div className="text-white my-16 flex gap-6 items-center">
              <a
                href=""
                className="border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors my-0"
              >
                <FaLinkedin className="w-6 h-6 my-11" />
              </a>
              <a
                href=""
                className="border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors my-0"
              >
                <FaInstagram className="w-6 h-6 my-11" />
              </a>
              <a
                href=""
                className="border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors my-0"
              >
                <FaWhatsapp className="w-6 h-6 my-11" />
              </a>
              <a
                href=""
                className="border-b-4 border-transparent hover:border-blue-800 duration-300 transition-colors my-0"
              >
                <MdEmail className="w-6 h-6 my-11" />
              </a>
              <div className="h-[0.5px] w-8 bg-white my-4"></div>

              <div className="flex items-center gap-2">
                <p className="uppercase text-xl my-11">Share</p>
                <button onClick={openModal}>
                  <MdShare className="w-6 h-6 my-11" />
                  <Modal modal={modal} closeModal={closeModal} />
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <div className="blob">
                <img
                  className="absolute top-0 left-auto transform -translate-x-1/2 w-60 h-60 animate-spin-slow"
                  src="../Remove-bg.ai_1718508847540.png"
                  alt="world"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <AboutMe />
      <Projects />
      <Skills />
      <ClientDataForm />
      <ToastContainer />
    </>
  );
}

// if (Object.values(data).includes("")) {
// }
// let error = "";
// if (Object.values(data).includes("")) {
//   error = "All fields are required";
// }

// if (error.length) {
//   return error;
// }

export default App;
