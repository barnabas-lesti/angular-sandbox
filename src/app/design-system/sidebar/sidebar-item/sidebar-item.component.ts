import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { type SidebarItem } from "./sidebar-item.types";
import { IconComponent } from "../../icon";
import { SidebarItemToggleComponent } from "../sidebar-item-toggle/sidebar-item-toggle.component";

@Component({
  selector: "app-sidebar-item-component",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconComponent, SidebarItemToggleComponent],
  templateUrl: "./sidebar-item.component.html",
})
export class SidebarItemComponent {
  @Input() item!: SidebarItem;
}
