import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { APP_SERVER_CONFIG } from "./app/app.const";

export default () => bootstrapApplication(AppComponent, APP_SERVER_CONFIG);
