"use client";

import { SessionProvider } from "next-auth/react";
import { Props } from "./Props";

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
