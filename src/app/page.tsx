import Box from "@/components/Box";
import NewTask from "@/components/NewTask";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center py-3 flex-col">
        <div className="flex gap-4 py-2">
          <h1 className="text-3xl font-bold">Lista de Tarefas</h1>
        </div>
        <div className="flex gap-4">
          <NewTask />
        </div>
        <div className="flex gap-8 py-4">
          <Box
            text="Exemplo de tarefa"
            description="Este é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir."
          />
          <Box
            text="Exemplo de tarefa"
            description="Este é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir."
          />
        </div>
      </div>
    </>
  );
}
