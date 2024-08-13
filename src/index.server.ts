import { bootstrapApplication } from "@angular/platform-browser";

import { APP_SERVER_CONFIG, AppComponent } from "./app";

const bootstrap = () => bootstrapApplication(AppComponent, APP_SERVER_CONFIG);

export default bootstrap;
