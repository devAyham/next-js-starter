"use client";

import axios from "@/lib/axios";
import { signIn, useSession } from "next-auth/react";

export const useRefreshToken = () => {
  const { data: session, update } = useSession();

  const refreshToken = async () => {
    const res = await axios.post("/auth/refresh", {
      refresh: session?.tokens.refreshToken,
    });

    if (session) {
      session.tokens.accessToken = res.data.accessToken;
      update({
        ...session,
        user: {
          ...session?.user,
          accessToken: res.data.accessToken,
        },
      });
    } else signIn();
  };
  return refreshToken;
};
