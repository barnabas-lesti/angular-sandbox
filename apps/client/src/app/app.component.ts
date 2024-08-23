import { Component, OnDestroy, OnInit } from "@angular/core";
import { merge, Subscription, tap } from "rxjs";

import { PlatformService } from "@ate-libs/core";

console.debug("@ate/client", "app.component.ts");

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit, OnDestroy {
  title = "ASAC Root";
  isBrowser = false;
  isServer = false;
  subscriptions$$: Subscription | undefined;

  constructor(private readonly platformService: PlatformService) {
    console.debug("@ate/client", "AppComponent", "constructor");
  }

  ngOnInit(): void {
    console.debug("@ate/client", "AppComponent", "ngOnInit");

    this.isBrowser = this.platformService.isBrowser();
    this.isServer = this.platformService.isServer();

    const isBrowser$ = this.platformService.onBrowser$().pipe(
      tap(() => {
        console.debug("I will only log on a browser.");
      }),
    );
    const isServer$ = this.platformService.onServer$().pipe(
      tap(() => {
        console.debug("I will only log on a server.");
      }),
    );

    this.subscriptions$$ = merge(isBrowser$, isServer$).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions$$?.unsubscribe();

    console.debug("@ate/client", "AppComponent", "ngOnDestroy");
  }
}
