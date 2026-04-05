import { useState } from "react";
import { Button } from "./Button";
import { Text } from "./Text";
import type { ToastProps } from "@/types/toast";
import { toast } from "sonner";

export function Toast({ title, action, id }: ToastProps) {
  const [isActionLoading, setIsActionLoading] = useState(false);

  async function handleAction() {
    setIsActionLoading(true);
    await action?.onClick();
    setIsActionLoading(false);
    toast.dismiss(id);
  }

  return (
    <div className="flex w-full items-center gap-200 rounded-medium bg-container-inverse p-200 font-sans shadow-blocky-floating md:max-w-[364px]">
      <Text className="text-content-inverse">{title}</Text>
      {action && (
        <Button
          className="shrink-0"
          isLoading={isActionLoading}
          onClick={handleAction}
        >
          {isActionLoading ? action.loadingLabel : action.label}
        </Button>
      )}
    </div>
  );
}
