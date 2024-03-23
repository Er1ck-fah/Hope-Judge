import mongoose from "mongoose";

const rubriqueSchema = new mongoose.Schema(
  {
    code_rubrique: {
      type: String,
      required: true,
      unique: true,
    },
    nom_rubrique: {
      type: String,
      required: true,
    },
    logo_rubrique: {
      type: String,
      max: 50,
    },

    description_rubrique: {
      type: String,
      max: 100,
    },
    is_enable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Rubriques", rubriqueSchema);
