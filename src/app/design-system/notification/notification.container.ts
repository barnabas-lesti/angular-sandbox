import { AsyncPipe } from "@angular/common";
import { Component, type OnInit } from "@angular/core";
import { type Observable } from "rxjs";

import { type Notification } from "./notification.class";
import { NotificationComponent } from "./notification.component";
import { NotificationService } from "./notification.service";

@Component({
  selector: "app-notification-container",
  standalone: true,
  imports: [NotificationComponent, AsyncPipe],
  templateUrl: "./notification.container.html",
})
export class NotificationContainer implements OnInit {
  notifications$!: Observable<Notification[]>;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifications$ = this.notificationService.notifications$;
  }

  onNotificationDelete(id: string) {
    this.notificationService.deleteNotificationByID(id);
  }
}
