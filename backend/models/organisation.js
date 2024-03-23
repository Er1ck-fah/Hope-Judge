import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    code_organisation: {
      type: String,
      required: true,
      unique: true,
    },
    nom_organisation: {
      type: String,
      required: true,
    },
    logo_organisation: {
      type: String,
      max: 50,
    },

    description_organisation: {
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

export default mongoose.model("Organisations", UserSchema);
