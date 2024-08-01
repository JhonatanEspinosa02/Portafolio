import { Technologies } from "../data/Technologies";

export default function Skills() {
  return (
    <>
      <main className="container mx-auto p-10 mb-14">
        <div className="flex justify-center py-14">
          <h1 className="text-4xl text-white uppercase text-center font-bold">
            My <span className="text-blue-800">Skills</span>
          </h1>
          <div className="h-1 w-24 bg-blue-800 my-5 mx-5"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 place-items-center mx-20">
          {Technologies.map((technologie) => (
            <div key={technologie.key} className="p-5 flex flex-col items-center">
              <img
                className="w-14 h-14"
                src={technologie.img}
                alt="technologie"
              />
              <p className="text-white text-center">
                {technologie.technologie}
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
