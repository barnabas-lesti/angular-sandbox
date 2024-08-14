import { Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AVAILABLE_ICONS } from "./icon.const";
import { type IconName, type IconSize } from "./icon.types";

/**
 * - https://fontawesome.com/search?m=free&o=r
 * - https://docs.fontawesome.com/web/style/size
 * - https://github.com/FortAwesome/angular-fontawesome/blob/58af2e5139b79c15a8294255a343d127f184f902/docs/usage/features.md
 */
@Component({
  selector: "app-icon-component",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./icon.component.html",
})
export class IconComponent {
  @Input() name!: IconName;
  @Input() size?: IconSize = "lg";

  get icon() {
    return AVAILABLE_ICONS[this.name];
  }
}
