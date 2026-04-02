import { cn } from "../utils/classNames";
import { Loader, type LucideIcon } from "lucide-react";
import { Icon } from "./Icon";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  variant?: "default" | "accent" | "danger";
  icon?: LucideIcon;
  isLoading?: boolean;
  className?: string;
}

const variants = {
  default: "bg-surface hover:bg-surface-hover active:bg-surface-pressed",
  accent:
    "bg-surface-accent hover:bg-surface-accent-hover active:bg-surface-accent-pressed",
  danger:
    "bg-surface-danger hover:bg-surface-danger-hover active:bg-surface-danger-pressed",
};

export function Button({
  children,
  variant = "default",
  icon,
  isLoading = false,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-10 cursor-pointer items-center justify-center gap-2 rounded-2xl px-4 pb-0.5 text-lg select-none",
        "shadow-elevated hover:shadow-elevated-hover active:shadow-inset",
        "transition hover:-translate-y-px active:translate-y-0.5",
        "squircle",
        !children && "w-10",
        variants[variant],
        isLoading &&
          "pointer-events-none cursor-progress bg-surface-pressed shadow-inset",
        className,
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-surface-hover disabled:text-content-disabled disabled:shadow-none",
      )}
      {...rest}
    >
      {isLoading && (
        <Icon size="medium" icon={Loader} className="animate-spin" />
      )}
      {!isLoading && icon && <Icon size="medium" icon={icon} />}
      {children && <span className="translate-y-[0.05rem]">{children}</span>}
    </button>
  );
}
