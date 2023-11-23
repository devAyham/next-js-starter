"use client";

import { signOut, useSession } from "next-auth/react";
import { Props } from "./Props";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth({ children }: Props) {
  const { data: sessionData } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionData?.errors === "invalid") {
      console.log("ess");

      // Sign out here
      signOut();
    }
  }, [sessionData?.errors]);

  return <>{children}</>;
}
