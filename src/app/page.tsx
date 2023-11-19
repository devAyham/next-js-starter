import { PagesRotes } from "@/constants/routes/pagesRoutes";
import { RedirectType, redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Page() {
  const session = await getServerSession(options);
  if (session?.user) {
    redirect(PagesRotes.DashboardRoutes.index, RedirectType.replace);
  }
  return <></>;
}
