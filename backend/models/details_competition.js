import mongoose from "mongoose";
const DetailsCompetitionSchema = {
  date_affectation: {
    type: Date,
  },
  nb_participant: {
    type: int,
  },
  type_competion: {
    type: String,
    enum: ["PO", "PP"], // PO: Play-Off   PP: Phase Pole
  },

  is_enable: {
    type: Boolean,
    default: true,
  },
  orga_event: { type: mongoose.Types.ObjectId, ref: "OrgEvent" },
  event_rubriq: { type: mongoose.Types.ObjectId, ref: "EventRubriq" },
  rubriq_categorie: { type: mongoose.Types.ObjectId, ref: "RubriqCat" },
};

export default mongoose.model("DetailsCompetition", DetailsCompetitionSchema);
