"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  onClick,
}) => {
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
      className={`fixed left-0 top-0 h-screen w-full translate-x-0  transition-all ease-in-out
       ${showModal ? "z-30 bg-[rgba(0,0,0,0.2)]" : "-z-50 bg-white"}
      `}
    >
      <div
        className={`ml-auto bg-[#f9f8f7] h-full lg:w-1/3 md:w-[85%] w-[90%] translate duration-500 overflow-auto
      ${showModal ? "translate-x-0" : "translate-x-full"}
      ${showModal ? "opacity-100" : "opacity-0"}
    `}
      >
        <div className="w-full bg-[#009A7B] flex items-center h-11 text-white">
          <span className="font-medium ml-6" onClick={onClick}>{title}</span>
          <button
            onClick={handleClose}
            className="cursor-pointer w-auto z-20 absolute top-3 right-6 hover:scale-110"
          >
            <X size={24} />
          </button>
        </div>
        <div className="lg:pt-4 pt-6 px-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
