import { Component } from "@angular/core";

import { BreadcrumbListItemComponent } from "./breadcrumb-list-item/breadcrumb-list-item.component";
import { BreadcrumbSidebarToggleComponent } from "./breadcrumb-sidebar-toggle/breadcrumb-sidebar-toggle.component";

@Component({
  selector: "app-breadcrumb-component",
  standalone: true,
  imports: [BreadcrumbListItemComponent, BreadcrumbSidebarToggleComponent],
  templateUrl: "./breadcrumb.component.html",
})
export class BreadcrumbComponent {}
