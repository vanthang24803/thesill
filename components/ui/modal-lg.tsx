"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  return (
    <div
      className={`fixed left-0 top-0 h-screen w-full translate-x-0 overflow-auto  transition-all ease-in-out
       ${showModal ? "z-30 bg-[rgba(0,0,0,0.2)]" : "-z-50 bg-white"}
      `}
    >
      <div
        className={`ml-auto bg-[#f9f8f7] h-[105vh] lg:w-1/3 md:w-full w-[90%] translate duration-500 
      ${showModal ? "translate-x-0" : "translate-x-full"}
      ${showModal ? "opacity-100" : "opacity-0"}
    `}
      >
        <button
          onClick={handleClose}
          className="cursor-pointer w-auto z-20 absolute top-6 right-6 hover:scale-110"
        >
          <X size={24} />
        </button>
        <div className="lg:pt-11 pt-10 px-8">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
