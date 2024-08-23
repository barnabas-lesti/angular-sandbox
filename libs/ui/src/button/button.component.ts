import { Component, OnDestroy, OnInit } from "@angular/core";

console.debug("@ate-libs/ui", "button.component.ts");

/**
 * Application common button component.
 */
@Component({
  selector: "app-button-component",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent implements OnInit, OnDestroy {
  constructor() {
    console.debug("@ate-libs/ui", "ButtonComponent", "constructor");
  }

  ngOnInit(): void {
    console.debug("@ate-libs/ui", "ButtonComponent", "ngOnInit");
  }

  ngOnDestroy(): void {
    console.debug("@ate-libs/ui", "ButtonComponent", "ngOnDestroy");
  }
}
