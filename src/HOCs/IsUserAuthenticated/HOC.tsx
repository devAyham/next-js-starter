// "use client";
import { useSession } from "next-auth/react";
import { Props } from "./Props";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

async function  HOC({ Authenticated, NotAuthenticated }: Props) {
  const session = await getServerSession(options);

  // const { data: session } = useSession({
  //   required: true,
  // onUnauthenticated() {
  //     redirect('/api/auth/signin?callbackUrl=/client')
  // }
  // });
  // must check if the user is authenticated in some how
  return <>{session ? <> {Authenticated}</> : <> {NotAuthenticated}</>}</>;
}

export default HOC;
