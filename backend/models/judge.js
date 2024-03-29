import mongoose from "mongoose";

const MembreSchema = new mongoose.Schema(
  {
    matricule_judge: {
      type: String,
      required: true,
      unique: true,
    },
    group_membre: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      max: 200,
    },
    date_affiliation: {
      type: String,
      max: 50,
    },
    date_expiration: {
      type: String,
      max: 50,
    },
    is_valid: {
      type: Boolean,
    },
    qr_code: {
      type: String,
      max: 200,
    },
    is_enable: {
      type: Boolean,
      default: true,
    },
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true }
);

export default mongoose.model("Membres", MembreSchema);
