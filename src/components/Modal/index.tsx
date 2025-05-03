import React from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        className=" p-6 rounded-lg shadow-lg w-[400px]"
        style={{ backgroundColor: "#ededed" }}
      >
        {children}
      </div>
    </div>
  );
}
