import { IRoute, IRouteSidebarGroup } from "@/types/navigation";
import { usePathname, useRouter } from "next/navigation";

export const isWindowAvailable = () => typeof window !== "undefined";

export const useFindCurrentRoute = (routes: IRoute[]): IRoute | undefined => {
  // const foundRoute = routes.find(
  //   (route) =>
  //     isWindowAvailable() &&
  //     window.location.href.indexOf(route.layout + route.path) !== -1 &&
  //     route,
  // );

  // return foundRoute;

  const router = useRouter();
  const currentRoute = usePathname();

  const foundRoute = routes.find(
    (route) => currentRoute === route.layout + route.path,
  );

  return foundRoute;
};

export const GetActiveRoute = (groups: IRouteSidebarGroup[]): string => {
  const route = useFindCurrentRoute(groups.flatMap((group) => group.routes));

  return route?.name || "Default";
};

export const useGetActiveNavbar = (groups: IRouteSidebarGroup[]): boolean => {
  const route = useFindCurrentRoute(groups.flatMap((group) => group.routes));

  return !!route?.secondary;
};

export const getActiveNavbarText = (
  groups: IRouteSidebarGroup[],
): string | boolean => {
  return GetActiveRoute(groups);
};

// import { IRoute, IRouteSidebarGroup } from "@/types/navigation";

// export const isWindowAvailable = () => typeof window !== "undefined";

// export const findCurrentRoute = (routes: IRoute[]): IRoute | undefined => {
//   const foundRoute = routes.find(
//     (route) =>
//       isWindowAvailable() &&
//       window.location.href.indexOf(route.layout + route.path) !== -1 &&
//       route,
//   );

//   return foundRoute;
// };

// export const getActiveRoute = (groups: IRouteSidebarGroup[]): string => {
//   const route = findCurrentRoute(groups.flatMap((group) => group.routes));

//   return route?.name || "Default";
// };

// export const getActiveNavbar = (groups: IRouteSidebarGroup[]): boolean => {
//   const route = findCurrentRoute(groups.flatMap((group) => group.routes));

//   return !!route?.secondary;
// };

// export const getActiveNavbarText = (
//   groups: IRouteSidebarGroup[],
// ): string | boolean => {
//   return getActiveRoute(groups);
// };
