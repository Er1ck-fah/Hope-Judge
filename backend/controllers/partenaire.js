import Partenaires from "../models/partenaire.js";

// Get list of country
export async function GetPartenaires(req, res) {
  try {
    const partenaire = await Partenaires.find({});
    res.send(partenaire).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Create a new country
export async function AddPartenaires(req, res) {
  const { code_partenaire, nom_partenaire, description_partenaire } = req.body;

  try {
    const partenaire = new Partenaires({
      code_partenaire,
      nom_partenaire,
      description_partenaire,
    });
    await partenaire.save();
    res.status(200).send(partenaire);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Update Country information by id
export async function UpdatePartenaires(req, res) {
  const { id } = req.params;
  const { code_partenaire, nom_partenaire, description_partenaire } = req.body;

  try {
    const partenaire = await Partenaires.findByIdAndUpdate(
      id,
      { code_partenaire, nom_partenaire, description_partenaire },
      { new: true }
    );
    res.status(200).send(partenaire);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Delete Country information by id
export async function DeletePartenaires(req, res) {
  const { id } = req.params;
  try {
    const partenaire = await Partenaires.findByIdAndDelete(id);
    res.status(200).send(partenaire);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
