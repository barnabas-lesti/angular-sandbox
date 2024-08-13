import { type IconName } from "../../icon/icon.types";

export interface SidebarItemProps {
  icon: IconName;
  label: string;
  route: {
    path: string;
    query?: { [key: string]: string };
    fragment?: string;
  };
  children?: Omit<SidebarItemProps, "icon">[];
}
