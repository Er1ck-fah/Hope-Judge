import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema(
  {
    refmatch: {
      type: String,
      required: true,
      unique: true,
    },
    round: {
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
    is_enable: {
      type: Boolean,
      default: true,
    },
    refmatch: { type: mongoose.Types.ObjectId, ref: "Matchs" },
    judge: { type: mongoose.Types.ObjectId, ref: "Judges" },
  },
  { timestamps: true }
);

export default mongoose.model("Votes", VoteSchema);
