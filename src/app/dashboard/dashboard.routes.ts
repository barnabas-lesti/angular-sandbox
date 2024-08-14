import { type Routes } from "@angular/router";

import { type SidebarItem } from "@app/design-system";

export const DASHBOARD_ROUTES: Routes = [
  { path: "dashboard", loadComponent: () => import("./dashboard.page").then(({ DashboardPage }) => DashboardPage) },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
];

export const DASHBOARD_SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: "lineChart",
    route: {
      path: "/dashboard",
    },
  },
];
