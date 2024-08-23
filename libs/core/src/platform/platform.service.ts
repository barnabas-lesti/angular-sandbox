import { Injectable } from "@angular/core";
import { filter, Observable, of } from "rxjs";

console.debug("@ate/core", "platform.service.ts");

/**
 * Service to check the current platform.
 */
@Injectable({
  providedIn: "root",
})
export class PlatformService {
  constructor() {
    console.debug("@ate/core", "PlatformService", "constructor");
  }

  /**
   * Check if the current platform is a browser.
   * @returns True if the current platform is a browser, false otherwise.
   */
  isBrowser() {
    return typeof window !== "undefined";
  }

  /**
   * Check if the current platform is a server.
   * @returns True if the current platform is a server, false otherwise.
   */
  isServer() {
    return !this.isBrowser();
  }

  /**
   * Creates an observable that only emits if platform is a browser.
   * @returns An observable that emits true if the current platform is a browser, otherwise it doesn't emit.
   */
  onBrowser$(): Observable<boolean> {
    return of(this.isBrowser()).pipe(filter((isBrowser) => isBrowser));
  }

  /**
   * Creates an observable that only emits if platform is server.
   * @returns An observable that emits true if the current platform is server, otherwise it doesn't emit.
   */
  onServer$(): Observable<boolean> {
    return of(this.isServer()).pipe(filter((isServer) => isServer));
  }
}
