import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent, appServerConfig } from "./app";

const bootstrap = () => bootstrapApplication(AppComponent, appServerConfig);

export default bootstrap;
