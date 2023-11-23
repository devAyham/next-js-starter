import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { RequestInit } from "next/dist/server/web/spec-extension/request";

async function refreshToken(refreshToken: string) {
  try {
    const res = await fetch(`http://127.0.0.1:3001/auth/token-by-refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refreshToken,
      }),
    });
    if (res.status === 401) {
      console.log("401");
      // if (typeof window !== "undefined") {
      //   await signOut({ callbackUrl: "/login" });
      // }
      return null;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    // Handle network errors or other exceptions
    console.error("Error refreshing token:", error);
    return null;
  }
}

export async function request({
  url,
  apiConfig,
}: {
  url: string;
  apiConfig?: RequestInit;
}) {
  const { headers: myHeaders, ...restConfig } = apiConfig ?? {};
  const session = await getServerSession(options);
  try {
    console.log("before: ", session);

    let res = await fetch("http://127.0.0.1:3001", {
      headers: {
        Authorization: `Bearer ${session?.tokens.accessToken}`,
        ...myHeaders,
      },
      ...restConfig,
    });

    if (res.status === 401) {
      if (session) {
        const newTokens = await refreshToken(session?.tokens.refreshToken);
        session.tokens.accessToken = newTokens?.accessToken;
        session.tokens.refreshToken = newTokens?.refreshToken;
      }
      // console.log("after: ", session);
      res = await fetch("http://127.0.0.1:3001", {
        method: "GET",
        headers: {
          Authorization: `bearer ${session?.tokens.accessToken}`,
          ...myHeaders,
        },
        ...restConfig,
      });
    }

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    if (session) session.errors = "invalid";
    // Handle network errors or other exceptions
    console.error("Error fetching API:", session);
    // await signOut();

    return null;
  }
}
