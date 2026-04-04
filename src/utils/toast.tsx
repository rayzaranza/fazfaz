import type { ToastProps } from "@/types/toast";
import { toast } from "sonner";
import { Toast } from "@/components/Toast";

export function showToast({ title, action }: ToastProps) {
  return toast.custom((id) => <Toast id={id} title={title} action={action} />);
}
