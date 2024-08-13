import { type Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", loadComponent: () => import("@app/dashboard").then(({ DashboardPage }) => DashboardPage) },
  { path: "**", loadComponent: () => import("@app/core").then(({ NotFoundPage }) => NotFoundPage) },
];
