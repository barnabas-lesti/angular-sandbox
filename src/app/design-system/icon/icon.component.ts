import { Component, Input } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AVAILABLE_ICONS } from "./icon.const";
import { type IconName } from "./icon.types";

/**
 * https://fontawesome.com/search?m=free&o=r
 */
@Component({
  selector: "app-icon",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./icon.component.html",
})
export class IconComponent {
  @Input() name!: IconName;

  get icon() {
    return AVAILABLE_ICONS[this.name];
  }
}
