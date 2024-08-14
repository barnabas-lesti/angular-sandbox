import { type SizeProp } from "@fortawesome/angular-fontawesome";

import { type AVAILABLE_ICONS } from "./icon.const";

export type IconName = keyof typeof AVAILABLE_ICONS;

export type IconSize = SizeProp;
