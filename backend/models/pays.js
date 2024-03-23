import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    code_pays: {
      type: String,
      required: true,
      unique: true,
    },
    nom_pays: {
      type: String,
      required: true,
    },
    logo_pays: {
      type: String,
      max: 50,
    },

    description_pays: {
      type: String,
      max: 200,
    },
    is_enable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pays", UserSchema);
