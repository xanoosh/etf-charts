import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import ModalNav from './ModalNav';

export default function EtfModal() {
  const { ticker } = useParams();
  const navigate = useNavigate();

  const handleCloseModal = () => navigate('/etf');

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center">
            <Transition.Child as={Fragment}>
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 w-full max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 flex items-start relative w-full">
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-2 right-2 mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                  >
                    <XMarkIcon
                      className="h-5 w-5 text-slate-800"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="ml-4 mt-0 text-left w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {ticker}
                    </Dialog.Title>
                    <ModalNav />
                    <div className="h-96 overflow-y-scroll">
                      <Outlet />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
