import Pays from "../models/pays.js";

// Get list of country
export async function GetPays(req, res) {
  try {
    const pays = await Pays.find({});
    res.send(pays).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Create a new country
export async function AddPays(req, res) {
  const { code_pays, nom_pays, description_pays } = req.body;

  try {
    const pays = new Pays({ code_pays, nom_pays, description_pays });
    await pays.save();
    res.status(200).send(pays);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Update Country information by id
export async function UpdatePays(req, res) {
  const { id } = req.params;
  const { code_pays, nom_pays, description_pays } = req.body;

  try {
    const pays = await Pays.findByIdAndUpdate(
      id,
      { code_pays, nom_pays, description_pays },
      { new: true }
    );
    res.status(200).send(pays);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

// Delete Country information by id
export async function DeletePays(req, res) {
  const { id } = req.params;
  try {
    const pays = await Pays.findByIdAndDelete(id);
    res.status(200).send(pays);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
