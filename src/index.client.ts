import { bootstrapApplication } from "@angular/platform-browser";

import { APP_CONFIG, AppComponent } from "./app";

bootstrapApplication(AppComponent, APP_CONFIG).catch((err) => console.error(err));
