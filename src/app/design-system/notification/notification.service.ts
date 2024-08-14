import { Injectable } from "@angular/core";

import { type Notification } from "./notification.types";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor() {}

  push(notification: Notification) {}
}
