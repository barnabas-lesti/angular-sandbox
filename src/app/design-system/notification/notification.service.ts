import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Notification } from "./notification.class";
import { DEFAULT_NOTIFICATION_DISPLAY_TIME } from "./notification.const";
import { type NotificationArgs } from "./notification.types";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private _notifications: Notification[] = [];
  private _notifications$ = new BehaviorSubject(this._notifications);

  get notifications$() {
    return this._notifications$.asObservable();
  }

  constructor() {}

  pushNotification(notification: NotificationArgs): void {
    const newNotification = new Notification(notification);
    this._notifications = [...this._notifications, newNotification];
    this._notifications$.next(this._notifications);

    setTimeout(() => {
      this.deleteNotificationByID(newNotification.id);
    }, DEFAULT_NOTIFICATION_DISPLAY_TIME);
  }

  deleteNotificationByID(id: string) {
    this._notifications = [...this._notifications.filter((notification) => notification.id !== id)];
    this._notifications$.next(this._notifications);
  }
}
