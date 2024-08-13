import { Component, Input } from "@angular/core";

import { type SidebarProps } from "./sidebar.types";
import { SidebarItemComponent } from "./sidebar-item/sidebar-item.component";
import { BrandLinkComponent } from "../brand-link/brand-link.component";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [BrandLinkComponent, SidebarItemComponent],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  @Input() props!: SidebarProps;
}
