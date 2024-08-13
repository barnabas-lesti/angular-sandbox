import { Component } from "@angular/core";

import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: "app-private-layout",
  standalone: true,
  imports: [BreadcrumbComponent, HeaderComponent, SidebarComponent],
  templateUrl: "./private-layout.component.html",
})
export class PrivateLayoutComponent {}
