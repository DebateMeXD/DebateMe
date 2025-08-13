"use server"
import { createDebateRoom } from "@/lib/debate-room-db";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { DebateRoomClass } from "@/models/DebateRoom";

export async function handleCreateRoom(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  if (!title || !topic || !description) {
    throw new Error("All fields are required.");
  }
    const session = await getServerSession(authOptions);
  
    if (session) {
      const user = {
        email: session.user?.email || "",
        name: session.user?.name || "",
        image: session.user?.image || "",
      };
  
  const {debates} = (await createDebateRoom(user.email, title, topic, description)) as {
    debates: DebateRoomClass
  };
  revalidatePath("/debates");
  redirect(`/debate-room/${debates._id}`);
  return debates;
} return { error: "User not authenticated" };
 
}