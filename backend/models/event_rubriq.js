import mongoose from "mongoose";
const EventRubriqSchema = {
  date_affectation: {
    type: Date,
  },

  is_enable: {
    type: Boolean,
  },
  evenement: { type: mongoose.Types.ObjectId, ref: "Evenement" },
  rubrique: { type: mongoose.Types.ObjectId, ref: "Rubrique" },
};

export default mongoose.model("EventRubriq", EventRubriqSchema);
