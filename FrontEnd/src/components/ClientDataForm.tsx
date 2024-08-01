import { addClient } from "../services/clientService";
import { ClientFormType } from "../Types/type";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import ovni from "./img/77f1a79f-679a-4aa6-a994-55939d23195a_480x360.gif";

export default function ClientDataForm() {
  const { register, handleSubmit, reset } = useForm<ClientFormType>();

  const onSubmit = async (data: ClientFormType) => {
    await addClient(data);
    toast.success("Great, message in my inbox! 🤝", { theme: "dark" });
    reset();
  };

  const onError = () => {
    toast.error("Whitespace is not accepted. 🚨", { theme: "dark" });
  };

  return (
    <div className="bg-zinc-900 grid grid-cols-1 lg:grid-cols-2 container mx-auto justify-center p-10 gap-0">
      <div className="bg-black m-10 rounded-l-3xl flex justify-center items-center w-full">
        <div className="text-center p-10">
          <h2 className="text-white text-xl font-semibold">
            Exploration knows no bounds. We are limited only by our own
            imagination and the will to pursue our dreams. <br />
            <span className="text-neutral-400 text-sm">
              - Charlie Bolden, former NASA Administrator
            </span>
          </h2>
          <img
            className="w-[22rem] h-[22rem] mx-auto p-3"
            src={ovni}
            alt="ovni"
          />
        </div>
      </div>

      <div className="bg-white m-10 rounded-r-3xl">
        <form className="mt-10 p-10" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="pb-7">
            <h1 className="text-center font-bold text-3xl p-5">Contact me</h1>
            <p className="text-lg text-neutral-400">
              Please fill out the fields below to get in touch with me.
            </p>
          </div>
          <div className="mb-4">
            <label
              className="text-gray-800 text-lg font-semibold"
              htmlFor="fullname"
            >
              Fullname:
            </label>
            <input
              id="fullname"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50 border-b-2 border-gray-300"
              placeholder="Jhonatan Espinosa"
              {...register("fullname", {
                required: "The fullname is required",
                validate: (value) => value.trim() !== "",
              })}
            />
          </div>

          <div className="mb-4">
            <label
              className="text-gray-800 text-lg font-semibold"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "The field email is required",
                validate: (value) => value.trim() !== "",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email",
                },
              })}
              className="mt-2 block w-full p-3 bg-gray-50 border-b-2 border-gray-300"
              placeholder="jhonatan.esp21@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-gray-800 text-lg font-semibold"
              htmlFor="price"
            >
              Message:
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: "The field message is required",
                validate: (value) => value.trim() !== "",
              })}
              placeholder="Hi Jhonatan..."
              className="mt-2 block w-full p-3 bg-gray-50"
            ></textarea>
          </div>
          <input
            type="submit"
            className="m-2 w-full bg-blue-800 hover:bg-blue-700 p-2 text-white font-bold text-lg cursor-pointer rounded"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}
