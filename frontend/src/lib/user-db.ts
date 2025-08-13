import connectDB from "./connect-db";
import { stringToObjectId } from "./utils";
import { User } from "@/models/User";

interface Filter {
  page?: number;
  limit?: number;
}

export async function getUsers(filter: Filter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const users = await User.find().skip(skip).limit(limit).lean().exec();

    const results = users.length;

    return {
      users: users,
      page,
      limit,
      results,
    };
  } catch (error) {
    return { error };
  }
}

export async function createUser(email: string, name: string, image: string) {
  try {
    await connectDB();

    const user = await User.create({ email, name, image });

    return {
      user,
    };
  } catch (error) {
    return { error };
  }
}

export async function getUserByEmail(email: string) {
  try {
    await connectDB();

    const user = await User.findOne({ email: email }).lean().exec();
    if (user) {
      return {
        user,
      };
    } else {
      return { error: "User not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function updateUserById(
  id: string,
  { email, name, image }: { email?: string; name?: string; image?: string }
) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "User not found" };
    }

    const user = await User.findByIdAndUpdate(
      parsedId,
      { email, name, image },
      { new: true }
    )
      .lean()
      .exec();

    if (user) {
      return {
        user,
      };
    } else {
      return { error: "User not found" };
    }
  } catch (error) {
    return { error };
  }
}
