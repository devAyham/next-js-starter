export const routes = [
  "dashboard/",
  "auth/",
  "trash/",
  "folders-invites/",
] as const;
export type routesType = (typeof routes)[number];

export const routesKeys = [
  "Dashboard",
  "Auth",
  "Trash",
  "FoldersInvites",
] as const;
export type routesKeysType = (typeof routesKeys)[number];

export const RoutesNames: Record<routesKeysType, routesType> = {
  Auth : "auth/",
  Dashboard : "dashboard/",
  FoldersInvites: "folders-invites/",
  Trash : "trash/",
};
