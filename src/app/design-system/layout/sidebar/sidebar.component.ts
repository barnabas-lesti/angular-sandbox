import { Component } from "@angular/core";

import { SidebarListItemComponent } from "./sidebar-list-item/sidebar-list-item.component";
import { BrandLinkComponent } from "../brand-link/brand-link.component";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [BrandLinkComponent, SidebarListItemComponent],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {}
