import { type Routes } from "@angular/router";

export const METRICS_ROUTES: Routes = [
  { path: "metrics", loadComponent: () => import("./metrics.page").then(({ MetricsPage }) => MetricsPage) },
];
