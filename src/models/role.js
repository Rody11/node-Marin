import { Schema, model } from "mongoose";

export const ROLES = ["user", "admin", "moderator"];

const roleSchemas = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchemas);