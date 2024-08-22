import { Component, OnInit } from "@angular/core";
import { PlatformService } from "@as-packages/core";

@Component({
  selector: "asac-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "ASAC Root";
  isBrowser!: boolean;

  constructor(private readonly platformService: PlatformService) {}

  ngOnInit(): void {
    this.isBrowser = this.platformService.isBrowser();
    console.debug("Is browser:", this.isBrowser);
  }
}
