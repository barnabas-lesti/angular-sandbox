import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Notification } from "./notification.class";
import { DEFAULT_NOTIFICATION_DISPLAY_TIME } from "./notification.const";
import { type NotificationArgs } from "./notification.types";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private _notifications$ = new BehaviorSubject<Notification[]>([]);

  get notifications$() {
    return this._notifications$.asObservable();
  }

  constructor() {}

  createNotification(notification: NotificationArgs): void {
    const newNotification = new Notification(notification);
    this._notifications$.next([...this._notifications$.value, newNotification]);

    setTimeout(() => this.deleteNotificationByID(newNotification.id), DEFAULT_NOTIFICATION_DISPLAY_TIME);
  }

  deleteNotificationByID(id: string) {
    this._notifications$.next([...this._notifications$.value.filter((notification) => notification.id !== id)]);
  }
}
