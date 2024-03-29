import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    code_partenaire: {
      type: String,
      required: true,
      unique: true,
    },
    nom_partenaire: {
      type: String,
      required: true,
    },
    logo_partenaire: {
      type: String,
      max: 50,
    },

    description_partenaire: {
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

export default mongoose.model("Partenaire", UserSchema);
