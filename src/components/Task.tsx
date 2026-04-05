import { Check } from "lucide-react";
import { Text } from "./Text";
import { cn } from "@/utils/classNames";
import { Icon } from "./Icon";

interface TaskProps {
  name: string;
  isDone: boolean;
  className?: string;
}

export function Task({ name, isDone, className }: TaskProps) {
  return (
    <div
      className={cn(
        "group flex min-h-600 items-center gap-200 rounded-medium bg-container px-200 shadow-blocky",
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        {isDone && (
          <Icon
            icon={Check}
            className="pointer-events-none absolute z-40 text-content-inverse"
          />
        )}
        <input
          className="size-300 shrink-0 blocky-inset appearance-none rounded-full checked:bg-container-inverse checked:shadow-none"
          type="checkbox"
        />
      </div>

      <Text
        className={cn(
          "w-full transition-all",
          isDone && "line-through opacity-60",
        )}
      >
        {name}
      </Text>

      <div
        className={cn(
          "flex gap-100 opacity-0 focus-within:opacity-100 md:group-hover:opacity-100",
        )}
      ></div>
    </div>
  );
}
