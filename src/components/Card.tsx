import { TreePalm, type LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import { Text } from "./Text";
import { cn } from "../utils/classNames";

interface CardProps {
  icon?: LucideIcon;
  title: string;
}

export function Card({ icon = TreePalm, title }: CardProps) {
  return (
    <div
      className={cn(
        "squircle flex min-w-36 cursor-pointer flex-col gap-7 rounded-3xl p-4 pb-3 select-none",
        "bg-surface hover:bg-surface-hover active:bg-surface-pressed",
        "shadow-elevated hover:shadow-elevated-hover active:shadow-inset",
        "transition hover:-translate-y-0.5 active:translate-y-0",
      )}
    >
      <Icon icon={icon} />
      <Text className="text-xl">{title}</Text>
    </div>
  );
}
