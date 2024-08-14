export interface Notification {
  label: string;
  type?: NotificationType;
}

type NotificationType = "info" | "success" | "warning" | "error";
