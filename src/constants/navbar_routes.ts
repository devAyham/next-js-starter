import { routesType } from "./routes";

export const navbarRoutes: {
  label: string;
  value: routesType;
}[] = [
  {
    label: "Auth",
    value: "auth/",
  },
  {
    label: "Dashboard",
    value: "dashboard/",
  },
  {
    label: "Folder Invites",
    value: "folders-invites/",
  },
  {
    label: "Trash",
    value: "trash/",
  },
];
