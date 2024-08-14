import { Component, Input } from "@angular/core";

import { SidebarItemComponent } from "./sidebar-item/sidebar-item.component";
import { type SidebarItem } from "./sidebar-item/sidebar-item.types";
import { BrandLinkComponent } from "../brand-link/brand-link.component";

@Component({
  selector: "app-sidebar-component",
  standalone: true,
  imports: [BrandLinkComponent, SidebarItemComponent],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  @Input() items!: SidebarItem[];
}
