import { type Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", loadComponent: () => import("@src/dashboard").then(({ DashboardPage }) => DashboardPage) },
  { path: "**", loadComponent: () => import("@src/core").then(({ NotFoundPage }) => NotFoundPage) },
];
