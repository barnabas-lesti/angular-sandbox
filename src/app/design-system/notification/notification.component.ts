import { Component, EventEmitter, Input, Output } from "@angular/core";

import { DEFAULT_NOTIFICATION_TYPE } from "./notification.const";
import { type NotificationType } from "./notification.types";
import { IconComponent } from "../icon";

@Component({
  selector: "app-notification-component",
  standalone: true,
  imports: [IconComponent],
  templateUrl: "./notification.component.html",
})
export class NotificationComponent {
  @Input() id!: string;
  @Input() type?: NotificationType = DEFAULT_NOTIFICATION_TYPE;

  @Output() delete: EventEmitter<string> = new EventEmitter();

  get typeClass(): string {
    switch (this.type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500 dark:bg-neutral-700";
    }
  }

  onCloseClick() {
    this.delete.emit(this.id);
  }
}
