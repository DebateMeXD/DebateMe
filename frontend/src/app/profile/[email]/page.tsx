import UserDetails from "@/components/UserDetails";
import { getUserByEmail } from "@/lib/user-db";
import { UserClass } from "@/models/User";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ email: string }>;
}) {
  let { email } = await params;
  email = decodeURIComponent(email);

  const { user } = (await getUserByEmail(email)) as {
    user: UserClass | null;
  };

  const profileImage = user?.image || "/no-album.png";
  const userName = user?.name || email;

  const formattedUser = {
    ...user,
    image: profileImage,
    name: userName,
    email: email,
  } as UserClass;

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <UserDetails user={formattedUser} />
    </div>
  );
}
