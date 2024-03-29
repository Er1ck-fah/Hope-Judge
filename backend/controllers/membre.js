import membre from "../models/membre.js";
import Membre from "../models/membre.js";

export async function GetAllMembres(req, res) {
  try {
    const membre = await membre.find({});
    res.send(membre).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function GetMembreById(req, res) {
  const { id } = req.params;
  try {
    const membre = await Membre.find({ matricule_membre: id });
    res.send(membre).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function AddMembre(req, res) {
  const { matricule_membre, group_membre, photo } = req.body;

  try {
    const membre = new Membre({
      matricule_membre,
      group_membre,
      photo,
    });
    await membre.save();
    res.status(200).send(membre);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function UpdateMembre(req, res) {
  const { id } = req.params;
  const { matricule_membre, group_membre, photo } = req.body;

  try {
    const membre = await Membre.findByIdAndUpdate(
      id,
      { group_membre, photo },
      { new: true }
    );
    res.status(200).send(membre);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
export async function DeleteMembre(req, res) {
  const { id } = req.params;
  const { is_valid } = false;

  try {
    const membre = await Membre.findByIdAndUpdate(
      id,
      { is_valid },
      { new: true }
    );
    res.status(200).send(membre);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
