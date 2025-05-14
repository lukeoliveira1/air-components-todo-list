"use client";

import { useEffect, useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskCard from "@/components/TaskCard";

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    const tasksLocalStorage = localStorage.getItem("tasks");
    if (tasksLocalStorage) {
      setTasks(JSON.parse(tasksLocalStorage));
    }
  }, []);

  const addTask = (text: string, description: string) => {
    setTasks((prevTasks) => [...prevTasks, { text, description }]);
  };

  const editTask = (index: number, newText: string, newDescription: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index
          ? { ...task, text: newText, description: newDescription }
          : task
      )
    );
  };

  const deleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center py-3 flex-col">
        <div className="flex gap-4 py-2">
          <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
        </div>
        <div className="flex gap-4">
          <TaskForm addTask={addTask} />
        </div>
        <div id="boxes" className="grid grid-cols-2 gap-8 py-4">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              index={index}
              text={task.text}
              description={task.description}
              handleEdit={(newText, newDescription) =>
                editTask(index, newText, newDescription)
              }
              handleDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}
