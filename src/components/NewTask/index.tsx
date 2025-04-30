"use client";

import { Plus } from "lucide-react";

interface NewTaskProps {
  handleClick: () => void;
}

export default function NewTask({ handleClick }: NewTaskProps) {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <>
      <div className="w-[1000px] h-[300px] border-gray-300 border-1 rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Adicionar tarefa</h2>
        <div className="space-y-3">
          <form action="#" className="space-y-5" onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="w-full px-3 py-2 border-gray-300 rounded-md outline-none ring-1 ring-gray-300"
              placeholder="Título da tarefa"
            />
            <textarea
              className="w-full h-[100px] px-3 py-2 border-gray-300 rounded-md outline-none ring-1 ring-gray-300"
              placeholder="Descrição (opcional)"
            />
            <button
              type="submit"
              className="flex items-center justify-center w-full bg-gray-800 text-white font-medium py-2 rounded-md gap-2 cursor-pointer"
            >
              <Plus /> Adicionar tarefa
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
