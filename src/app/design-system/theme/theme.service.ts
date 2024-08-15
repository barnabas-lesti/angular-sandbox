import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { CookieService } from "@app/core";

import { DEFAULT_THEME, THEME_COOKIE_NAME } from "./theme.const";
import { ThemeName } from "./theme.types";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly documentBody: HTMLElement | undefined;
  private readonly _theme$: BehaviorSubject<ThemeName>;

  constructor(private cookieService: CookieService) {
    this.documentBody = globalThis.document?.body;
    this._theme$ = new BehaviorSubject<ThemeName>(
      this.cookieService.getCookieValue<ThemeName>(THEME_COOKIE_NAME) || DEFAULT_THEME,
    );

    this.getTheme$().subscribe((newTheme) => {
      this.cookieService.setCookieValue(THEME_COOKIE_NAME, newTheme);
      this.documentBody?.classList.remove(newTheme === "dark" ? "light" : "dark");
      this.documentBody?.classList.add(newTheme);
    });
  }

  toggleTheme(): void {
    this._theme$.next(this._theme$.value === "dark" ? "light" : "dark");
  }

  getTheme$(): Observable<ThemeName> {
    return this._theme$.asObservable();
  }
}
