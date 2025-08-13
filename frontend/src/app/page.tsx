"use client";

import SignInButton from "@/components/SignInButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/redirect");
    }
  }, [session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 max-w-xs">
        <img
          src="/logo.png"
          className="mx-auto w-40 h-40 mb-4 drop-shadow-lg"
          alt="Logo"
        />
        <br />
        <SignInButton />
      </div>
    </div>
  );
}
