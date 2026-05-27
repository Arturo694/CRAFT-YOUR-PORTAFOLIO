import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
    IoMenuOutline,
    IoCloseOutline,
    IoPersonOutline,
    IoCodeSlashOutline,
    IoLayersOutline,
    IoPaperPlaneOutline,
    IoTerminalOutline,
} from "react-icons/io5";

const links = [
    { href: "/whoami", label: "How am I?", icon: IoPersonOutline },
    { href: "/myprojects", label: "My Projects", icon: IoCodeSlashOutline },
    { href: "/skills", label: "Skills", icon: IoLayersOutline },
    { href: "/contactme", label: "Contact me", icon: IoPaperPlaneOutline },
];

function ModalNav() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 border rounded-lg border-neutral-200 text-xl text-black transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:border-neutral-300 hover:text-white active:scale-95 sm:hidden"
            >
                <IoMenuOutline />
            </button>

            <Transition show={isOpen} as={Fragment}>
                <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                    <TransitionChild
                        as={Fragment}
                        enter="transition duration-300 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition duration-200 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30" />
                    </TransitionChild>
                    <TransitionChild
                        as={Fragment}
                        enter="transition duration-300 ease-out"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition duration-200 ease-in"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >
                        <DialogPanel className="fixed inset-0 w-full min-h-screen bg-white flex flex-col">
                            <div className="flex items-center justify-between px-5 pt-8 pb-4">
                                <span className="font-family-gabarito text-2xl font-bold text-black flex items-center gap-3">
                                    <IoTerminalOutline className="text-blue-600" />
                                    John Doe
                                </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 border rounded-lg border-neutral-200 text-xl text-black transition-colors duration-300 ease-in-out hover:bg-blue-600 hover:border-neutral-300 hover:text-white active:scale-95"
                                >
                                    <IoCloseOutline />
                                </button>
                            </div>

                            <nav className="flex-1 flex flex-col px-5">
                                {links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-5 px-6 py-5 rounded-2xl text-black hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-family-outfit font-semibold text-lg"
                                    >
                                        <link.icon className="text-2xl shrink-0" />
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </DialogPanel>
                    </TransitionChild>

                </Dialog>
            </Transition >
        </>
    );
}

export default ModalNav;