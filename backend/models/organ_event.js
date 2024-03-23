import mongoose from "mongoose";
const OrgaEventSchema = {
  date_affectation: {
    type: Date,
  },

  is_enable: {
    type: Boolean,
    default: true,
  },
  organisation: { type: mongoose.Types.ObjectId, ref: "Organisation" },
  evenement: { type: mongoose.Types.ObjectId, ref: "Evenement" },
};

export default mongoose.model("OrgEvent", OrgaEventSchema);
