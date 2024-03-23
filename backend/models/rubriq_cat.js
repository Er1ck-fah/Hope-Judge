import mongoose from "mongoose";
const RubriqCatSchema = {
  date_affectation: {
    type: Date,
  },

  is_enable: {
    type: Boolean,
  },
  rubrique: { type: mongoose.Types.ObjectId, ref: "Rubrique" },
  categorie: { type: mongoose.Types.ObjectId, ref: "Categorie" },
};

export default mongoose.model("RubriqCat", RubriqCatSchema);
