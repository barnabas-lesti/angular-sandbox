import { type Routes } from "@angular/router";

import { DASHBOARD_ROUTES, DASHBOARD_SIDEBAR_ITEMS } from "./dashboard";
import { type SidebarItem } from "./design-system";
import { METRICS_ROUTES, METRICS_SIDEBAR_ITEMS } from "./metrics";
import { USER_ROUTES, USER_SIDEBAR_ITEMS } from "./user";

export const APP_ROUTES: Routes = [
  ...DASHBOARD_ROUTES,
  ...METRICS_ROUTES,
  ...USER_ROUTES,
  { path: "**", redirectTo: "/" },
];

export const APP_SIDEBAR_ITEMS: SidebarItem[] = [
  ...DASHBOARD_SIDEBAR_ITEMS,
  ...METRICS_SIDEBAR_ITEMS,
  ...USER_SIDEBAR_ITEMS,
];
