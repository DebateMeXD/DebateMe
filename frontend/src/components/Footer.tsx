export const dynamic = "force-dynamic";

import { authOptions } from "@/lib/auth-options";
import { getUserByEmail } from "@/lib/user-db";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Footer() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email || "";
  const { user } = await getUserByEmail(userEmail);

  const profileImage = session?.user?.image || "/profile-picture.png";

  if (!user) {
    redirect("/invalid-user");
  }

  return (
    <footer className="fixed bottom-0 w-full bg-gradient-to-t from-[#000000fb] via-[#000000e5] to-transparent py-4 z-100">
      <div className="flex justify-between items-center px-8">
        <Link href="/dashboard" className="flex flex-col items-center">
          <img
            src="/home.png"
            alt="Home icon"
            width={30}
            height={30}
            className="invert scale-130"
          />
          <p className="text-xs text-center">Home</p>
        </Link>
        <Link href="/not-found" className="flex flex-col items-center">
          <img
            src="/albums.png"
            alt="Albums icon"
            width={30}
            height={30}
            className="invert scale-130"
          />
          <p className="text-xs text-center">Placeholder</p>
        </Link>

        <Link href="/not-found" className="flex flex-col items-center">
          <img
            src="/settings.png"
            alt="Admin icon"
            width={30}
            height={30}
            className="invert scale-130"
          />
          <p className="text-xs text-center">Placeholder</p>
        </Link>

        <Link href="/profile" className="flex flex-col items-center">
          <img
            src={profileImage}
            referrerPolicy="no-referrer"
            alt="Profile picture"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-xs text-center">Profile</p>
        </Link>
      </div>
    </footer>
  );
}
