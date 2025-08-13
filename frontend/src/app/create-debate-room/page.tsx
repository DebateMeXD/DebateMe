"use client"
import { handleCreateRoom } from "../api/actions";

export default function CreateDebateRoomPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-100 py-12 px-4">
      <form
        action={async (formData) => { await handleCreateRoom(formData); }}
        className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl p-10 border border-purple-100"
      >
        <h2 className="text-3xl font-black mb-6 text-blue-700 text-center">Create Debate Room</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-semibold text-gray-700">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            autoComplete="off"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="topic" className="block mb-1 font-semibold text-gray-700">Topic</label>
          <input
            id="topic"
            name="topic"
            type="text"
            required
            autoComplete="off"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block mb-1 font-semibold text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:from-green-500 hover:to-blue-600 transition"
        >
          Create Room
        </button>
      </form>
    </div>
  );
 }

