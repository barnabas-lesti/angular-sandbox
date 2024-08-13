import { type Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
  { path: "dashboard", loadComponent: () => import("./dashboard.page").then(({ DashboardPage }) => DashboardPage) },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
];
