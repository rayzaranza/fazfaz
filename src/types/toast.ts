export interface ToastProps {
  id?: string | number;
  title: string;
  action?: {
    label: string;
    loadingLabel: string;
    onClick: () => void | Promise<void>;
  };
}
