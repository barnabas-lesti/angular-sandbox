import { Injectable } from "@angular/core";
import { CookieService as NGXCookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class CookieService {
  constructor(private ngxCookieService: NGXCookieService) {}

  getCookieValue<T extends string>(name: string): T {
    return this.ngxCookieService.get(name) as T;
  }

  setCookieValue(name: string, value: string): void {
    this.ngxCookieService.set(name, value);
  }
}
