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
    collection: "users",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
class UserClass {
  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true })
  image: string;

  @prop({ required: false, default: false })
  isAdmin: boolean;

  _id: mongoose.Types.ObjectId | string;

  id: string;
}

const User = getModelForClass(UserClass);
export { User, UserClass };
