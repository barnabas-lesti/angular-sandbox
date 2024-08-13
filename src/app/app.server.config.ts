import { mergeApplicationConfig } from "@angular/core";
import { provideServerRendering } from "@angular/platform-server";

import { APP_CONFIG } from "./app.config";

export const APP_SERVER_CONFIG = mergeApplicationConfig(APP_CONFIG, {
  providers: [provideServerRendering()],
});
