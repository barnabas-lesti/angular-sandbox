import { type Routes } from "@angular/router";

import { type SidebarItem } from "@app/design-system";

export const METRICS_ROUTES: Routes = [
  { path: "metrics", loadComponent: () => import("./metrics.page").then(({ MetricsPage }) => MetricsPage) },
];

export const METRICS_SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: "Metrics",
    icon: "calculator",
    route: {
      path: "/metrics",
    },
  },
];
