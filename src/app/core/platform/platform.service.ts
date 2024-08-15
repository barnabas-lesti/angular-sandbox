import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  isClient(): boolean {
    return !this.isServer();
  }
}
