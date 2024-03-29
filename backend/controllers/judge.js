import Judges from "../models/judge.js";

export async function GetAllJudges(req, res) {
  try {
    const judge = await Judges.find({});
    res.send(judge).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function GetjudgeById(req, res) {
  const { id } = req.params;
  try {
    const judge = await Judges.find({ matricule_judge: id });
    res.send(judge).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function AddJudges(req, res) {
  const { matricule_judge, group_judge, photo } = req.body;

  try {
    const judge = new Judges({
      matricule_judge,
      group_judge,
      photo,
    });
    await judge.save();
    res.status(200).send(judge);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function UpdateJudges(req, res) {
  const { id } = req.params;
  const { matricule_judge, group_judge, photo } = req.body;

  try {
    const judge = await Judges.findByIdAndUpdate(
      id,
      { group_judge, photo },
      { new: true }
    );
    res.status(200).send(judge);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function DeleteJudges(req, res) {
  const { id } = req.params;
  const { is_valid } = false;

  try {
    const judge = await Judges.findByIdAndUpdate(
      id,
      { is_valid },
      { new: true }
    );
    res.status(200).send(judge);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
