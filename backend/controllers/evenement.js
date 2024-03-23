import Evenements from "../models/evenement.js";

// Get list of Element
export async function GetEvenements(req, res) {
  try {
    const evenement = await Evenements.find({});
    res.send(evenement).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Create a new Element
export async function AddEvenements(req, res) {
  const { code_evenement, nom_evenement, description_evenement } = req.body;

  try {
    const evenement = new Evenements({
      code_evenement,
      nom_evenement,
      description_evenement,
    });
    await evenement.save();
    res.status(200).send(evenement);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Update Element information by id
export async function UpdateEvenements(req, res) {
  const { id } = req.params;
  const { code_evenement, nom_evenement, description_evenement } = req.body;

  try {
    const evenement = await Evenements.findByIdAndUpdate(
      id,
      { code_evenement, nom_evenement, description_evenement },
      { new: true }
    );
    res.status(200).send(evenement);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Delete Element information by id
export async function DeleteEvenements(req, res) {
  const { id } = req.params;
  try {
    const evenement = await Evenements.findByIdAndDelete(id);
    res.status(200).send(evenement);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
