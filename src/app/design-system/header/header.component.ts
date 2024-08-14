import { Component } from "@angular/core";

import { HeaderProfileComponent } from "./header-profile/header-profile.component";
import { BrandLinkComponent } from "../brand-link";

@Component({
  selector: "app-header-component",
  standalone: true,
  imports: [HeaderProfileComponent, BrandLinkComponent],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {}
