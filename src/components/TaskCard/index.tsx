import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import Modal from "../Modal";

interface CardProps extends TaskProps {
  index: number;
  handleEdit: (newText: string, newDescription: string) => void;
  handleDelete: (index: number) => void;
}

export default function TaskCard({
  index,
  text,
  description,
  handleEdit,
  handleDelete,
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newText, setNewText] = useState(text);
  const [newDescription, setNewDescription] = useState(description);

  const handleSave = () => {
    handleEdit(newText, newDescription);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-[485px] h-[150px] border-gray-300 border-1 rounded-lg p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 pb-5">
            <input type="checkbox" className="size-5 accent-black" />
            <h3 className="font-semibold text-base">{text}</h3>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="cursor-pointer text-gray-500 hover:text-black"
              onClick={() => setIsModalOpen(true)}
            >
              <SquarePen />
            </button>
            <button
              type="button"
              className="cursor-pointer text-gray-500 hover:text-black"
              onClick={() => handleDelete(index)}
            >
              <Trash2 />
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

        <Modal isOpen={isModalOpen}>
          <h2 className="text-xl font-bold mb-4">Editar tarefa</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Título da tarefa"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="w-full border border-gray-300 rounder-lg p-2"
              />
            </div>
            <div className="mb-4">
              <textarea
                value={newDescription}
                placeholder="Descrição (opcional)"
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full border border-gray-300 rounder-lg p-2"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-lg cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg cursor-pointer"
              >
                Salvar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
