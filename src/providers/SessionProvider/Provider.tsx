"use client";

import { SessionProvider as NextSessionProvider } from "next-auth/react";
import { Props } from "./Props";

export default function SessionProvider({ children }: Props) {
  return <NextSessionProvider>{children}</NextSessionProvider>;
}
