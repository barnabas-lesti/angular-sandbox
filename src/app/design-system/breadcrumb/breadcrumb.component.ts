import { Component } from "@angular/core";

import { BreadcrumbListItemComponent } from "./breadcrumb-list-item/breadcrumb-list-item.component";
import { SidebarToggleComponent } from "./sidebar-toggle/sidebar-toggle.component";

@Component({
  selector: "app-breadcrumb-component",
  standalone: true,
  imports: [SidebarToggleComponent, BreadcrumbListItemComponent],
  templateUrl: "./breadcrumb.component.html",
})
export class BreadcrumbComponent {}
