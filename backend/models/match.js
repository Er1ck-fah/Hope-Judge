import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
  {
    refmatch: {
      type: String,
      required: true,
      unique: true,
    },
    scoreA: {
      type: int,
      default: 0,
    },
    scoreB: {
      type: int,
      default: 0,
    },
    nombreRound: {
      type: int,
      default: 0,
    },
    path: {
      loss: string,
      win: string,
    },
    is_enable: {
      type: Boolean,
      default: true,
    },
    positionA: { type: mongoose.Types.ObjectId, ref: "Membres" },
    positionB: { type: mongoose.Types.ObjectId, ref: "Membres" },
  },
  { timestamps: true }
);

export default mongoose.model("Matchs", MatchSchema);
