import { type Routes } from "@angular/router";

export const USER_ROUTES: Routes = [
  { path: "profile", loadComponent: () => import("./profile/profile.page").then(({ ProfilePage }) => ProfilePage) },
  { path: "user", redirectTo: "/profile" },
  { path: "user/profile", redirectTo: "/profile" },
];
