"use client";

import { useState } from "react";
import Box from "@/components/Box";
import NewTask from "@/components/NewTask";

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleClick = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text: "Nova tarefa",
        description:
          "Este é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir.",
      },
    ]);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center py-3 flex-col">
        <div className="flex gap-4 py-2">
          <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
        </div>
        <div className="flex gap-4">
          <NewTask handleClick={handleClick} />
        </div>
        <div id="boxes" className="flex gap-8 py-4">
          {tasks.map((task, index) => (
            <Box key={index} text={task.text} description={task.description} />
          ))}
        </div>
      </div>
    </>
  );
}
