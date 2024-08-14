import { createUID } from "@app/utility";

import { DEFAULT_NOTIFICATION_TYPE } from "./notification.const";
import { type NotificationArgs, type NotificationType } from "./notification.types";

export class Notification {
  readonly id: string;
  readonly content: string;
  readonly type: NotificationType;

  constructor(args: NotificationArgs) {
    this.id = createUID();
    this.content = args.content;
    this.type = args.type || DEFAULT_NOTIFICATION_TYPE;
  }
}
