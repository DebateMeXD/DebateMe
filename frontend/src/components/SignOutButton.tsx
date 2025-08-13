"use client";

import { handleSignOut } from "@/lib/auth";

export default function SignOutButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span onClick={handleSignOut}>{children}</span>;
}
