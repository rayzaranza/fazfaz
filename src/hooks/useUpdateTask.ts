import { updateTask } from "@/services/tasks";
import { showToast } from "@/utils/toast";
import { useRouter } from "@tanstack/react-router";
import { useTransition } from "react";

export function useUpdateTask() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function handleToggle(taskId: string, isDone: boolean) {
    startTransition(async () => {
      const { error } = await updateTask({ id: taskId, is_done: isDone });
      if (error) {
        showToast({ title: "erro ao concluir tarefa" });
        return;
      }
      await router.invalidate({ sync: true });
    });
  }

  return { isPending, handleToggle };
}
