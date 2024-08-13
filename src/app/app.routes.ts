import { type Routes } from "@angular/router";

import { DASHBOARD_ROUTES } from "./dashboard";
import { METRICS_ROUTES } from "./metrics";
import { USER_ROUTES } from "./user";

export const APP_ROUTES: Routes = [
  ...DASHBOARD_ROUTES,
  ...METRICS_ROUTES,
  ...USER_ROUTES,
  { path: "**", redirectTo: "/" },
];
