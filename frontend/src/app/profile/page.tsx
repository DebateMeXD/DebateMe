import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import UserDetails from "@/components/UserDetails";
import SignOutButton from "@/components/SignOutButton";
import ButtonWrapper from "@/components/ButtonWrapper";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  const user = session?.user;

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <UserDetails user={user} />
      <br />
      <SignOutButton>
        <ButtonWrapper>
          <button className="hover:cursor-pointer">Sign Out</button>
        </ButtonWrapper>
      </SignOutButton>
    </div>
  );
}
