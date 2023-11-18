import { EntityIdType } from "@/types/EntityId.type";
import { MainFeatures } from "./mainFeatures";
import { SubFeatures } from "./subFeatures";
import { DashboardPathNames } from "./dashboardPathNames/dashboardPathNames";
import { PagesNavigateMethods } from "./pagesNavigateMethods";

export const PagesRotes = {
  ///////////////////////////////////////////////////////////////////////////////////
  AuthRoutes: {
    
    SignIn: {
      index: `/${SubFeatures.SignIn}`,
    },

    SignUp: {
      index: `/${SubFeatures.SignUp}`,
    },
  },
  ///////////////////////////////////////////////////////////////////////////////////
  DashboardRoutes: {
    index: `/${MainFeatures.Dashboard}`,

    FoldersRoutes: {
      index: DashboardPathNames.FoldersPathName,
      create: `${DashboardPathNames.FoldersPathName}/${PagesNavigateMethods.CREATE}`,
      show: (id: EntityIdType) => `${DashboardPathNames.FoldersPathName}/${id}`,
      update: (id: EntityIdType) =>
        `${DashboardPathNames.FoldersPathName}/${id}/${PagesNavigateMethods.UPDATE}`,
    },

    SharedWithMeRoutes: {
      index: DashboardPathNames.SharedWithMePathName,
      show: (id: EntityIdType) =>
        `${DashboardPathNames.SharedWithMePathName}/${id}`,
    },

    RecentsRoutes: {
      index: DashboardPathNames.RecentsPathName,
      show: (id: EntityIdType) => `${DashboardPathNames.RecentsPathName}/${id}`,
    },
  },
  ///////////////////////////////////////////////////////////////////////////////////
};
