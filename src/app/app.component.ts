import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { PrivateLayoutComponent } from "@app/design-system";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, PrivateLayoutComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
