import { getDebateRoomById } from "@/lib/debate-room-db";
import { notFound } from "next/navigation";

interface DebateRoomPageProps {
  params: { id: string };
}

export default async function DebateRoomPage({ params }: DebateRoomPageProps) {
  const { id } = params;
  const data = await getDebateRoomById(id);

  if (!data || !data.debates) {
    notFound();
  }

  const room = data.debates;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-100 py-12 px-4">
      <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-10 border border-purple-100">
        <h2 className="text-4xl font-black mb-4 text-blue-700 text-center">{room.title}</h2>
        <div className="mb-2 text-lg text-gray-700 text-center font-semibold">{room.topic}</div>
        <div className="mb-6 text-gray-600 text-center">{room.description}</div>
      </div>
    </div>
  );
}