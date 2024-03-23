import mongoose from "mongoose";

const EvenementSchema = new mongoose.Schema(
  {
    code_evenement: {
      type: String,
      required: true,
      unique: true,
    },
    nom_evenement: {
      type: String,
      required: true,
    },
    logo_evenement: {
      type: String,
      max: 50,
    },

    description_evenement: {
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

export default mongoose.model("Evenements", EvenementSchema);
