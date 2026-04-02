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
    <article
      className={cn(
        "squircle flex min-w-36 flex-col gap-7 rounded-3xl p-4 pb-3",
        "bg-surface hover:bg-surface-hover active:bg-surface-pressed",
        "shadow-elevated hover:shadow-elevated-hover active:shadow-inset",
        "transition duration-200 ease-out",
      )}
    >
      <Icon icon={icon} />
      <Text className="text-xl">{title}</Text>
    </article>
  );
}
