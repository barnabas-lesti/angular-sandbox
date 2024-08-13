import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { BreadcrumbComponent, HeaderComponent, SidebarComponent, type SidebarProps } from "@app/design-system";

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
  readonly sidebarProps: SidebarProps;

  constructor() {
    this.sidebarProps = {
      items: APP_SIDEBAR_ITEMS,
    };
  }
}
