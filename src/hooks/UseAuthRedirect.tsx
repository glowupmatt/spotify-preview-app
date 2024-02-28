"use client";
import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { DataContext } from "@/lib/AppContext";

export function UseAuthRedirect() {
  const { session } = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/song-feed");
    } else if (session?.status === "unauthenticated") {
      router.push("/");
    }
  }, [session, router]);
}
