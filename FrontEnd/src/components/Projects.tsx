import { projects } from "../data/Technologies";

export default function Projects() {
  return (
    <>
      <main className="bg-black container mx-auto p-10 flex justify-center">
        <div>
          <div className="flex justify-center py-14">
            <h1 className="text-4xl text-white uppercase text-center font-bold">
              My <span className="text-blue-800">Projects</span>
            </h1>
            <div className="h-1 w-24 bg-blue-800 my-5 mx-5"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3">
          {projects.map(item => (
            <div key={item.key} className="flex items-center text-white gap-14 bg-zinc-900 rounded-3xl w-80 h-[28rem] shadow-xl hover:shadow-blue-800 relative   group overflow-hidden">
              <div className="">
                <div className="transition-transform duration-500 group-hover:transform group-hover:translate-y-[-42%]">
                  <img
                    className="rounded-3xl p-2"
                    src={item.img}
                    alt="project"
                  />
                </div>

                <div className="text-center transition-transform duration-500 group-hover:transform group-hover:translate-y-[-90%]">
                  <h2 className="text-white font-bold text-3xl p-5">
                    {item.project}
                  </h2>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 p-5">
                <p className="pb-3 text-xl font-semibold text-neutral-400">Tech Stack: {item.techStack}</p>
                <div className="flex justify-center p-2">
                  <a
                    href="#"
                    className="bg-blue-800 hover:bg-blue-700 py-2 px-6 rounded-lg focus:ring focus:ring-blue-950 font-semibold text-white"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </main>
    </>
  );
}
