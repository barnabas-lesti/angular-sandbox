import { Component } from "@angular/core";

import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: "app-private-layout",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: "./private-layout.component.html",
  styleUrl: "./private-layout.component.css",
})
export class PrivateLayoutComponent {}
