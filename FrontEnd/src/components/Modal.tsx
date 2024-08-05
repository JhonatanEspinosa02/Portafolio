import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { socialMediaLinks } from "../data/Technologies";

type ModalState = {
  modal: boolean;
  closeModal: () => void;
};

export default function Modal({ modal, closeModal }: ModalState) {
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
          onClose={() => {}}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-4xl font-bold my-5 text-center"
                  >
                    My Social Media links
                  <p className="flex justify-center text-neutral-400 font-semibold text-lg">Thanks for sharing, buddy :)</p>
                  </Dialog.Title>
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-bold my-1"
                  >
                    Links
                  </Dialog.Title>

                  {socialMediaLinks.map((item) => (
                    <div key={item.media} className=" gap-3 p-3">
                      <label className="font-semibold" htmlFor={item.media}>{item.media}:</label>
                      <input
                        className="bg-gray-50 border-2 rounded-md border-gray-300 px-3 w-full py-1"
                        type="text"
                        value={item.link}
                        readOnly
                      />
                    </div>
                  ))}

                  <div className="flex justify-center p-7">
                    <button
                      className="bg-blue-800 text-white px-7 py-2 text-xl rounded-lg hover:bg-blue-700 w-full"
                      onClick={closeModal}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
