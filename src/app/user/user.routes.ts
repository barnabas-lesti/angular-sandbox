import { type Routes } from "@angular/router";

import { type SidebarItemProps } from "@app/design-system";

export const USER_ROUTES: Routes = [
  { path: "profile", loadComponent: () => import("./profile/profile.page").then(({ ProfilePage }) => ProfilePage) },
  { path: "user", redirectTo: "/profile" },
  { path: "user/profile", redirectTo: "/profile" },
];

export const USER_SIDEBAR_ITEMS: SidebarItemProps[] = [
  {
    label: "Profile",
    icon: "user",
    route: {
      path: "/profile",
    },
  },
];
