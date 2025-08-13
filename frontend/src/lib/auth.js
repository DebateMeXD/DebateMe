import { signIn, signOut } from "next-auth/react";

export const handleSignIn = async () => {
  await signIn("google", { callbackUrl: "/redirect" });
};

export const handleSignOut = () => {
  sessionStorage.removeItem("user");
  signOut({ callbackUrl: "/" });
};
