import { AsyncPipe } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { HeaderProfileComponent } from "./header-profile/header-profile.component";
import { BrandLinkComponent } from "../brand-link";
import { IconComponent } from "../icon";
import { ThemeName, ThemeService } from "../theme";

@Component({
  selector: "app-header-container",
  standalone: true,
  imports: [HeaderProfileComponent, BrandLinkComponent, IconComponent, AsyncPipe],
  templateUrl: "./header.container.html",
})
export class HeaderContainer {
  readonly theme$: Observable<ThemeName>;

  constructor(private themeService: ThemeService) {
    this.theme$ = this.themeService.getTheme$();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
