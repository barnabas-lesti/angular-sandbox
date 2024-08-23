import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { APP_CLIENT_CONFIG } from "./app/app.const";

bootstrapApplication(AppComponent, APP_CLIENT_CONFIG).catch((err) => console.error(err));
