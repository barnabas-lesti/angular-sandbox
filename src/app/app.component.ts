import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { BreadcrumbComponent, HeaderComponent, SidebarComponent, type SidebarItem } from "@app/design-system";

import { APP_SIDEBAR_ITEMS } from "./app.routes";

/**
 * https://preline.co/examples/layouts-application.html#application-layout-sidebar-dark
 */
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent, HeaderComponent, SidebarComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  readonly sidebarItems: SidebarItem[];

  constructor() {
    this.sidebarItems = APP_SIDEBAR_ITEMS;
  }
}
