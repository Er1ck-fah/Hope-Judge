import mongoose from "mongoose";

const CategorieSchema = new mongoose.Schema(
  {
    code_categorie: {
      type: String,
      required: true,
      unique: true,
    },
    nom_categorie: {
      type: String,
      required: true,
    },
    logo_categorie: {
      type: String,
      max: 50,
    },

    description_categorie: {
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

export default mongoose.model("Categories", CategorieSchema);
