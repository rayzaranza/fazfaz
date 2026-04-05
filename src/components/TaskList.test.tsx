import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskList } from "./TaskList";
import { vi, describe, test, expect } from "vitest";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import type { TaskListItem } from "@/types/tasks";

vi.mock("@/hooks/useUpdateTask", () => ({
  useUpdateTask: vi.fn(),
}));

describe("TaskList", () => {
  const mockTasks = [
    { id: "1", name: "Estudar React", is_done: false },
    { id: "2", name: "Fazer café", is_done: true },
  ] as TaskListItem[];

  test("renders a list of tasks", () => {
    vi.mocked(useUpdateTask).mockReturnValue({
      handleToggle: vi.fn(),
      isPending: false,
    });

    render(<TaskList tasks={mockTasks} />);

    expect(screen.getByText("Estudar React")).toBeInTheDocument();
    expect(screen.getByText("Fazer café")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  test("passes the correct id and value to handleToggle", async () => {
    const mockHandleToggle = vi.fn();
    vi.mocked(useUpdateTask).mockReturnValue({
      handleToggle: mockHandleToggle,
      isPending: false,
    });

    render(<TaskList tasks={mockTasks} />);
    const checkboxes = screen.getAllByRole("checkbox");
    await userEvent.click(checkboxes[0]);
    expect(mockHandleToggle).toHaveBeenCalledWith("1", true);
  });
});
