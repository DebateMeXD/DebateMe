import {
  ModelOptions,
  Severity,
  getModelForClass,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "debate_rooms",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
class DebateRoomClass {
  @prop({ required: true })
  owner: string;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  topic: string;

  @prop({ required: true })
  description: string;

  _id: mongoose.Types.ObjectId | string;
}

const DebateRoom = getModelForClass(DebateRoomClass);
export { DebateRoom, DebateRoomClass };
