import type { TaskListItem } from "@/types/tasks";
import { Task } from "./Task";

interface TaskListProps {
  tasks: TaskListItem[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <ul className="flex flex-col gap-200">
      {tasks.map(({ name, id, is_done }) => (
        <li key={id}>
          <Task name={name} isDone={is_done} />
        </li>
      ))}
    </ul>
  );
}
