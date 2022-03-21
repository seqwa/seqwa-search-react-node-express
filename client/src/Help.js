import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Help() {
    let [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Help
                </button>
            </div>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-slate-900/70" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Help
                                </Dialog.Title>
                                <div className="mt-4">
                                    <p className="text-indigo-500 font-medium">
                                        Search function lets you do full-text search and semantic re-ranking with search query and context.
                                    </p>
                                    <p className="text-sm text-gray-900 font-medium mt-4">
                                        Full-text Search
                                    </p>
                                    <ul className="list-inside list-disc text-sm text-gray-700 my-2">
                                        <li>Enter keywords and click the Search button.</li>
                                        <li>You can add filters to provide faceted search.</li>
                                        <li>This example only covers simple text search</li>
                                    </ul>
                                    <p className="text-sm text-gray-900 font-medium mt-4">
                                        Semantic Re-ranking
                                    </p>
                                    <ul className="list-inside list-disc text-sm text-gray-700 my-2">
                                        <li>Same as full-text search enter keywords</li>
                                        <li>The Context can be assumed as a title or description of one of more items previously searched by a user</li>
                                        <li>Click the Search button</li>
                                        <li>If you no context is provided the search results will be ranked based on the Search query</li>
                                    </ul>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
