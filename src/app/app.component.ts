import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { ButtonComponent } from "./design-system";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Angular Sandbox";
}
