import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { createUser, getUserByEmail, updateUserById } from "@/lib/user-db";
import { redirect } from "next/navigation";

export default async function Redirect() {
  const session = await getServerSession(authOptions);

  if (session) {
    const user = {
      email: session.user?.email || "",
      name: session.user?.name || "",
      image: session.user?.image || "",
    };

    const response = await getUserByEmail(user.email);
    if (!response.user) {
      await createUser(user.email, user.name, user.image);
      redirect("/dashboard");
    } else {
      await updateUserById(`${response.user._id}`, user);
      redirect("/dashboard");
    }
  }

  return <div>redirecting...</div>;
}
