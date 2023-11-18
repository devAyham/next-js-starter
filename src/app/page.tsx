import { PagesRotes } from "@/constants/routes/pagesRoutes";
import { RedirectType, redirect } from "next/navigation";

export default function Page() {
  redirect(PagesRotes.DashboardRoutes.index, RedirectType.replace);
  return <></>;
}
