import { Component } from "@angular/core";

import { IconComponent } from "../../../icon/icon.component";
import { SidebarListItemToggleComponent } from "../sidebar-list-item-toggle/sidebar-list-item-toggle.component";

@Component({
  selector: "app-sidebar-list-item",
  standalone: true,
  imports: [IconComponent, SidebarListItemToggleComponent],
  templateUrl: "./sidebar-list-item.component.html",
})
export class SidebarListItemComponent {}
