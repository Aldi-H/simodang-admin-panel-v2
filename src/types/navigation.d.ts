import { ReactComponentElement } from "react";

export interface IRoute {
  name: string;
  layout: string;
  path: string;
  icon: ReactComponentElement | string;
  secondary?: boolean;
}

export interface IRouteSidebarGroup {
  label?: string;
  routes: IRoute[];
}
