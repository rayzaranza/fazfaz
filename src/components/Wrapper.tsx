import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function Wrapper({ children, className }: WrapperProps) {
  return <div className={`mx-auto max-w-3xl p-8 ${className}`}>{children}</div>;
}
