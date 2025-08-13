import connectDB from "./connect-db";
import { stringToObjectId } from "./utils";
import { DebateRoom } from "@/models/DebateRoom";

interface Filter {
  page?: number;
  limit?: number;
}

export async function getDebateRoom(filter: Filter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const debates = await DebateRoom.find().skip(skip).limit(limit).lean().exec();

    const results = debates.length;

    return {
      debates: debates,
      page,
      limit,
      results,
    };
  } catch (error) {
    return { error };
  }
}

export async function createDebateRoom(owner: string, title: string, topic: string, description: string) {
  try {
    await connectDB();

    const debates = await DebateRoom.create({ owner, title, topic, description });

    return {
      debates,
    };
  } catch (error) {
    return { error };
  }
}

export async function getDebateRoomById(id: string) {
  try {
    await connectDB();
    
    const parsedId = stringToObjectId(id);
    if (!parsedId) {
      return { error: "Debate room not found" };
    }
    const debates = await DebateRoom.findOne({ _id: parsedId }).lean().exec();
    if (debates) {
      return {
        debates,
      };
    } else {
      return { error: "Debates not found" };
    }
  } catch (error) {
    return { error };
  }
}
