import { type Routes } from "@angular/router";

import { DASHBOARD_ROUTES } from "./dashboard";

export const APP_ROUTES: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  ...DASHBOARD_ROUTES,
  { path: "**", redirectTo: "/" },
];
