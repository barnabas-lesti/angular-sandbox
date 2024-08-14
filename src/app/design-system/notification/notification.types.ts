export interface NotificationArgs {
  content: string;
  type?: NotificationType;
}

export type NotificationType = "info" | "success" | "warning" | "error";
