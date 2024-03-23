import Rubriques from "../models/rubrique.js";

// Get list of Element
export async function GetRubriques(req, res) {
  try {
    const rubrique = await Rubriques.find({});
    res.send(rubrique).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Create a new Element
export async function AddRubriques(req, res) {
  const { code_rubrique, nom_rubrique, description_rubrique } = req.body;

  try {
    const rubrique = new Rubriques({
      code_rubrique,
      nom_rubrique,
      description_rubrique,
    });
    await rubrique.save();
    res.status(200).send(rubrique);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Update Element information by id
export async function UpdateRubriques(req, res) {
  const { id } = req.params;
  const { code_rubrique, nom_rubrique, description_rubrique } = req.body;

  try {
    const rubrique = await Rubriques.findByIdAndUpdate(
      id,
      { code_rubrique, nom_rubrique, description_rubrique },
      { new: true }
    );
    res.status(200).send(rubrique);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Delete Element information by id
export async function DeleteRubriques(req, res) {
  const { id } = req.params;
  try {
    const rubrique = await Rubriques.findByIdAndDelete(id);
    res.status(200).send(rubrique);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
