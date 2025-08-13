import Link from "next/link";
import { getDebateRoom } from "@/lib/debate-room-db";

export default async function DashboardPage() {
  const data = await getDebateRoom();
  const rooms = data?.debates || [];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-12 px-4">
      <div className="w-full max-w-3xl bg-white/80 rounded-3xl shadow-2xl p-10 mb-8 border border-blue-100">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 drop-shadow-lg text-center">
            Dashboard
          </h1>
          <Link
            href="/create-debate-room"
            className="ml-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-green-500 hover:to-blue-600 transition"
          >
            + Create Debate Room
          </Link>
        </div>
        <p className="text-xl mb-8 text-gray-700 text-center font-medium">
          Explore and join the latest Debate Rooms
        </p>
        <ul className="space-y-6">
          {rooms.length === 0 && (
            <li className="text-gray-400 text-center py-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-inner">
              No debate rooms found.
            </li>
          )}
          {rooms.map((room: any, idx: number) => (
            <li
              key={room.id || idx}
              className="relative bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl shadow-lg p-7 border border-blue-200 hover:scale-[1.02] hover:shadow-2xl transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-extrabold text-2xl text-blue-800 mb-1">
                    {room.title || "Unnamed Room"}
                  </div>
                  {room.description && (
                    <div className="text-gray-600 text-base">{room.description}</div>
                  )}
                </div>
              </div>
              <Link
                href={`/debate-room/${room._id}`}
                className="absolute top-7 right-7 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition"
              >
                Join
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}