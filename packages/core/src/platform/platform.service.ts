import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlatformService {
  isBrowser() {
    return typeof window !== "undefined";
  }

  isServer() {
    return !this.isBrowser();
  }
}
